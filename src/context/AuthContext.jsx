import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState({});
  const [role, setRole] = useState(null);
  const [isAuth, setIsAuth] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const isAuthenticated = localStorage.getItem('isAuth');
  const storedRole = localStorage.getItem('role');

  if (isAuthenticated === 'true' && storedRole) {
    setIsAuth(true);
    setRole(storedRole);
  } else {
    setIsAuth(false);
    setRole(null);
  }
}, []);

const logout = () => {
  localStorage.removeItem('isAuth');
  localStorage.removeItem('role');
  setIsAuth(false);
  setRole(null);
  navigate('/');
}

useEffect(() => {
  const handleCerrarSesion = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('role');
  };

  window.addEventListener('beforeunload', handleCerrarSesion); //beforeunload evento q se ejecuta al recargar, cerrar o navegar a otro sitio.

  return () => {
    window.removeEventListener('beforeunload', handleCerrarSesion);
  };
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email) validationErrors.email = 'Email es requerido';
    if (!pass) validationErrors.pass = 'Password es requerido';

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      const res = await fetch('data/users.json');
      const users = await res.json();
      const foundUser = users.find(
        
        (user) => user.email === email && user.pass === pass
        
      );
 if (!foundUser) {
  setError({ email: 'Credenciales inválidas' });
} else {
  setIsAuth(true);
  localStorage.setItem('isAuth', true);
  localStorage.setItem('role', foundUser.role);
  setRole(foundUser.role); 

  if (foundUser.role === 'admin') {
    navigate('/admin');
  } else {
    navigate('/');
  }
}

    } catch (err) {
      console.error('Error fetching users:', err);
      setError({ email: 'Algo salió mal. Por favor, intentá de nuevo más tarde.' });
    }
  };
  
  return (
    <AuthContext.Provider value={{ email, setEmail, pass, setPass, handleSubmit, error, role, isAuth, setIsAuth, logout,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
