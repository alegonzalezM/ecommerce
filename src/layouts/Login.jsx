import React, {useState, useContext} from 'react';
import {CartContext} from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const Login= () =>{
    const setAuthenticated = useContext(CartContext)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault()
      let validationErrors = {}
      if(!email) validationErrors.email = 'El email es requerido' ;
      if(!pass)  validationErrors.pass = 'La contraseña es requerida';

      if(Object.keys(validationErrors).length > 0) {
        setError(validationErrors)
      
      return   //return vacío para que corte 
    }
    try{
     const res = await fetch('/data/users.json');    
     const users = await res.json();  

       const foundUser = users.find((user) => user.email===email && user.pass===pass);

       if(!foundUser) { setError({email: 'credenciales inválidas'})
       } else {
       if(foundUser.role === 'admin'){ 
        setAuthenticated(true)
        navigate('/admin') }
       else { navigate('/') }
    }

    } catch (error) {
        setError({email: 'Algo salió mal, intente nuevamente'})
    }
    };
    return(
        <>
    <h1 className=' p-3' style={{textAlign:'left', margin:'1em 2em'}}>Login</h1>
    <div style={{ }}>

    <form className='form-control' style={{backgroundColor: '#b8e2b9'}}>
    <label className='m-3'>Email: <input id='form-login' type='email' value={email} placeholder='Ingrese su email'
      onChange={(e) => setEmail(e.target.value)} style={{ border: `1px solid ${error.email } ? 'red' : 'green' ` } } ></input></label>
    
    <label className='m-3'>Contraseña: <input type='password' id='form-pass' placeholder='Ingrese contraseña' value={pass}
      onChange={(e) => setPass(e.target.value)} style={{ border: `1px solid ${error.pass } ? 'red' : 'green' ` }}></ input></label>

      <button type="submit" className="btn btn-primary m-3">Ingresar</button>
      
   </form>
    
    {error.email && ( <div style={{color: 'red' }}> {error.email} </div>) }
    {error.pass && ( <div style={{color: 'red' }}> {error.pass} </div>) }
    </div>
</>
    )}
export default Login;
