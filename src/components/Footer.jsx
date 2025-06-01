import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Footer= () =>{
    return(
  <>
    <div className="navFooter" style={{  }}>
      <nav >
        <ul>
    
          <li><Link to='/' className="link">Inicio</Link></li>
          <li><Link to='/acercade' className="link">Acerca de</Link></li>
          <li><Link to='/contacto' className="link">Contacto</Link></li>
          <li><Link to='/login' className="link">Login</Link></li>

        </ul>    

      </nav>
       </div> 
       <br/>
                     <p>&copy;2025 - Derechos reservados</p>
        </>
 )}   

export default Footer