import { createContext, useContext, useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const AuthContext=  createContext ();
    export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState({});
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const {setAuthenticated} = useContext(CartContext);
   
    useEffect(()=>{
      const isAuthenticated = localStorage.getItem('isAuthenticated')==='true'
      if(isAuthenticated){setAuthenticated(true)
        navigate('/admin')
      }
    }, [] )
    const handleSubmit = async(e) => {
      e.preventDefault()

      let validationErrors = {}
      if(!email) validationErrors.email = 'El email es requerido' ;
      if(!pass)  validationErrors.pass = 'La contraseña es requerida';

      if(Object.keys(validationErrors).length > 0) {
        setError(validationErrors)
        return;
      }
        try{
     const res = await fetch('/data/users.json');    
     const users = await res.json();  

       const foundUser = users.find((user) => user.email===email && user.pass===pass);

       if(!foundUser) { setError({email: 'Las credenciales son inválidas'})
       } else {
       if(foundUser.role === 'admin'){ 
        setAuthenticated(true)
        localStorage.setItem('isAuthenticated', true)
        navigate('/admin') }
       else { navigate('/') }
    }

    } catch (error) {
        setError({email: 'Algo salió mal, intente nuevamente'})
    }
    };
        return(
            <AuthContext.Provider value={{user, email, setEmail, pass, setPass,error,  handleSubmit}}>
           { children }
           </AuthContext.Provider>
        );
};
    
export const useAuth = () => useContext(AuthContext);