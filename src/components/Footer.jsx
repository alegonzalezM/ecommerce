import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Footer= () =>{
    return(
  <>
    <div className="navFooter">
      <nav className="">
        <ul style={{ marginBottom:'.5rem'  }}>
    
          <li><NavLink to='/' className="link">Inicio</NavLink></li>
          <li><NavLink to='/acercade' className="link">Acerca de</NavLink></li>
          <li><NavLink to='/contacto' className="link">Contacto</NavLink></li>
          <li><NavLink to='/login' className="link">Login</NavLink></li>

        </ul>    

      </nav>
       </div> 
       <br/>
                     <p>&copy;2025 - Derechos reservados</p>
        </>
 )}   

export default Footer