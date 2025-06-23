import React, {useState, useContext} from 'react';
import {useAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login= () =>{
  const {user, email, setEmail, pass, setPass, handleSubmit, error} = useAuth();
  
    return(
      <>
      <div className="login-wrapper">
        <div className='overlay'></div>
        <div className='container-login'>
        <h1 className='login-title'>Login</h1>
   
    <form className='form-login'  onSubmit={handleSubmit}>
      
    <div className='form-login-div'  style={{ backgroundColor: `${error.email ? 'rgb(255,255,255,.5)' : 'rgb(90, 181, 7,.7)'}` }} ><i className="fa-solid fa-unlock-keyhole fa-2x"></i><input  type='email' name='email' value={email} placeholder='Email' autoComplete='email'
      onChange={(e) => setEmail(e.target.value)}></input></div>
   
    <div className='form-login-div'  style={{ backgroundColor: ` ${error.email ? 'rgb(255,255,255,.5)' : 'rgb(90, 181, 7,.6)'}` }}><i className="fa-solid fa-user-tie fa-2x"></i><input type='password' name='password' placeholder='●●●●●●●●●●'   autoComplete="current-password" value={pass}
      onChange={(e) => setPass(e.target.value)}></ input></div>


      <button type="submit" className="btn-submit">Ingresar</button>
      
   </form>
    
    {error.email && ( <div style={{color: '#FF074A', zIndex :'99', fontSize:'18px' }}> {error.email} </div>) }
    {error.pass && ( <div style={{color: 'black', zIndex :'99' }}> {error.pass} </div>) }
    </div>
    </div>
</>
    )

  }
export default Login;

//  Para que el autocompletado de email funcione correctamente en HTML/React:
// El input debe tener:

// type="email"

// name="email"

// autoComplete="email"