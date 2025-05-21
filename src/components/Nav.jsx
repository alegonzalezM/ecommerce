import React, { useState } from "react";
import "./../styles/styles.css";
import moneda from "../assets/cent.png";
import Cart from '../components/Cart'
import { Link } from "react-router-dom";


const Nav = ({ cartCount,  isCartOpen, setCartOpen, borrarProducto, vaciarCarrito,  cart }) => {
  const showCart= (e) => {
    console.log(e);
    console.log(setCartOpen);

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
          <li>Carrito: {cartCount}</li>
          <button className="btn-show-cart" onClick={()=> {
                console.log('antes de abrir carrito, isOpen =', isCartOpen);
                setCartOpen(true)}}
            style={{ marginLeft: "2rem", padding: "5px" }}>
           Ver carrito {cartCount}
           <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <Cart  cartItems={cart}  isOpen={isCartOpen}  vaciarCarrito={vaciarCarrito}
  borrarProducto={borrarProducto}  isCartOpen={isCartOpen}  onClose={()=> setCartOpen(false)} />
        </ul>
      </nav>
      <div></div>

      <div id="container-lista">
        <ul className="lista">
          {/* {lista.map((elem, index) => (
            <li
              key={index}
              style={{
                fontSize: "15px",
                backgroundColor: "2px  solid rgb(51, 246, 112)",
              }}
            >
              <button className="btn-lista" onClick={() => setCartOpen(true)}>
              </button>
              <Cart cartItems={cart} isOpen={isCartOpen} borrarProducto={borrarProducto} onClose={()=>
                    setCartOpen(false) } />
                  
              <br />
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
