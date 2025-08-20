import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(() => {
  const savedAuth = sessionStorage.getItem("isAuth");
  return savedAuth ? JSON.parse(savedAuth) : false; // por defecto false
});


// const [auth, setAuth] = useState(() => {
//   try {
//     return {
//       isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
//       role: localStorage.getItem("role") || null,
//     };
//   } catch {
//     return { isAuth: false, role: null };
//   }
// });

  const [role, setRole] = useState(() => {
  const savedRole = sessionStorage.getItem("role");
  return savedRole ? savedRole : null;
});

useEffect(() => {
  sessionStorage.setItem("isAuth", JSON.stringify(isAuth));
}, [isAuth]);

useEffect(() => {
  if (role) {
    sessionStorage.setItem("role", role);
  } else {
    sessionStorage.removeItem("role");
  }
}, [role]);


const login = (userRole) => {

  setIsAuth(true);
  setRole(userRole);
  // setIsAuth(true);
  // setRole(userRole);
  // localStorage.setItem("isAuth", true);
  // localStorage.setItem("role", userRole);
};

const logout = () => {
  setIsAuth(false);
  setRole(null);
  sessionStorage.removeItem("isAuth");
  sessionStorage.removeItem("role");
  navigate('/');
};

// useEffect(() => {
//   const handleCerrarSesion = () => {
//     localStorage.removeItem('isAuth');
//     localStorage.removeItem('role');
//   };
//   window.addEventListener('beforeunload', handleCerrarSesion); //beforeunload evento q se ejecuta al recargar, cerrar o navegar a otro sitio.
//   return () => {
//     window.removeEventListener('beforeunload', handleCerrarSesion);
//   };
// }, []);

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
  // sessionStorage.setItem('isAuth', true);
  sessionStorage.setItem('isAuth', JSON.stringify(true));
  sessionStorage.setItem('role', foundUser.role);
  setRole(foundUser.role); 

  if (foundUser.role === 'admin') {
    navigate('/admin');
  } else {
    navigate('/');
  }}
    } catch (err) {
      console.error('Error fetching users:', err);
      setError({ email: 'Algo salió mal. Por favor, intentá de nuevo más tarde.' });
    }
  };
  
  return (
    <AuthContext.Provider value={{ email, setEmail, pass, setPass, handleSubmit, error, role, isAuth, setIsAuth, login, logout,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 
