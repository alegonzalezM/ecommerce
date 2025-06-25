import React, { useState } from "react";
import "./../styles/styles.css";
import Cart from '../components/Cart'
import { NavLink, Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const { isCartOpen, setCartOpen, vaciarCarrito, cantTotal} =  useContext(CartContext);
  const { logout } = useAuth();

  const showCart= (e) => {
    console.log(e);

    const contenedor = document.getElementById("cart-container");
    if (contenedor.style.display === "none") {contenedor.style.display = "flex"
    } else { contenedor.style.display = "none";
    }};
  return (<>
       <nav className="nav">
         <ul style={{marginBottom:'3px'}}>
           <li className="submenu">Bicicletas
           <ul className="sublista">
             <li>MTB</li>
             <li>Urbanas</li>
             <li>Eléctricas</li>
           </ul></li>
           <li className="submenu">
             Repuestos
             <ul className="sublista">
               <li><NavLink to="/categoria/cadenas">Cadenas</NavLink></li>
               <li>cambios</li>
               <li>frenos</li>
               <li>horquillas</li>
               <li>manijas</li>
               <li>pedales</li>
             </ul>
           </li>
           <li className="submenu">
             Accesorios
             <ul className="sublista">
               <li><NavLink to="/categoria/cascos">Cascos</NavLink></li>
               <li><NavLink to="/categoria/luces">Luces</NavLink></li>
               <li><NavLink to="/categoria/herramientas">Herramientas</NavLink></li>
             </ul>
           </li>
           <li><NavLink to='/' className="link">Inicio</NavLink></li>
           <li><NavLink to='/acercade' className="link">Acerca de</NavLink></li>
           <li><NavLink to='/contacto' className="link">Contacto</NavLink></li>
           <li><NavLink to='/login' className="link">Login</NavLink></li>
           <li><NavLink to='/admin'><i className="fa-solid fa-user-tie"></i></NavLink></li>
           <button className="btn-show-cart" onClick={()=> {
                 setCartOpen(true)}}>
            Ver carrito 
            <i className="fa-solid fa-cart-shopping mx-1"></i>
            {cantTotal > 0 && ( <span className="badge">{cantTotal}</span> )}
           </button>
           <Cart isOpen={isCartOpen}  vaciarCarrito={vaciarCarrito} 
   isCartOpen={isCartOpen}  onClose={()=> setCartOpen(false)} />
         </ul>
       </nav> 
</>
  )}

export default Nav;
