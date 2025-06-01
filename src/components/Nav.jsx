import React, { useState } from "react";
import "./../styles/styles.css";
import Cart from '../components/Cart'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'


const Nav = () => {
  const { isCartOpen, setCartOpen, vaciarCarrito} =  useContext(CartContext);
  

  const showCart= (e) => {
    console.log(e);

    const contenedor = document.getElementById("cart-container");
    if (contenedor.style.display === "none") {contenedor.style.display = "flex"
    } else { contenedor.style.display = "none";
    }};
  return (
    <div className="nav">
      <nav>
        <ul>
          <li className="submenu">Bicicletas
          <ul className="sublista">
            <li>MTB</li>
            <li>Urbanas</li>
            <li>Eléctricas</li>
          </ul></li>
          <li className="submenu">
            Repuestos
            <ul className="sublista">
              <li>cadenas</li>
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
              <li>cascos</li>
              <li>luces</li>
              <li>herramientas</li>
            </ul>
          </li>
          <li><Link to='/' className="link">Inicio</Link></li>
          <li><Link to='/acercade' className="link">Acerca de</Link></li>
          <li><Link to='/contacto' className="link">Contacto</Link></li>
          <li><Link to='/login' className="link">Login</Link></li>
          {/* <li>Carrito: {cartCount}</li> */}
          <button className="btn-show-cart" onClick={()=> {
                setCartOpen(true)}}>
           Ver carrito 
           <i className="fa-solid fa-cart-shopping mx-1"></i>
          </button>
          <Cart isOpen={isCartOpen}  vaciarCarrito={vaciarCarrito} 
  isCartOpen={isCartOpen}  onClose={()=> setCartOpen(false)} />
        </ul>
      </nav>
      <div></div>



    </div>
  );
};

export default Nav;
