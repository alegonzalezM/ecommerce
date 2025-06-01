import React, {useState, useContext} from 'react';
import {useAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login= () =>{
  const {user, email, setEmail, pass, setPass, handleSubmit, error} = useAuth();

    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [error, setError] = useState({});
    // const navigate = useNavigate();
   
    
    return(
        <div className='container-login'>
    <h1 className='' style={{textAlign:'left', margin:'.5em'}}>Login</h1>
    <div style={{ }}>

    <form className='form-control bg-light text-dark'  onSubmit={handleSubmit} style={{ borderRadius: '25px', border: '1px solid green' }}>
      
    <label className='m-3'>Email: <input id='form-login' type='email' value={email} placeholder='Ingrese su email'
      onChange={(e) => setEmail(e.target.value)} style={{ border: `1px solid ${error.email ? 'red' : 'green'}` }} ></input>
      </label>
    
    <label className='m-3'>Contraseña: <input type='password' id='form-pass' placeholder='Ingrese contraseña' value={pass}
      onChange={(e) => setPass(e.target.value)} style={{ border: `1px solid ${error.pass ? 'red' : 'green'}` }}></ input></label>


      <button type="submit" className="btn-submit w-25 m-3">Ingresar</button>
      
   </form>
    
    {error.email && ( <div style={{color: 'red' }}> {error.email} </div>) }
    {error.pass && ( <div style={{color: 'red' }}> {error.pass} </div>) }
    </div>
</div>
    )}
export default Login;
