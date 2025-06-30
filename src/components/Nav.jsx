// import React, { useState } from "react";
// import "./../styles/styles.css";
// import Cart from '../components/Cart'
// import { NavLink, Link } from "react-router-dom";
// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext'
// import { useAuth } from "../context/AuthContext";
// import SubMenu from '../components/Submenu'

// const Nav = () => {
//   const { isCartOpen, setCartOpen, vaciarCarrito, cantTotal} =  useContext(CartContext);
//   const { logout } = useAuth();
// const [menuActivo, setMenuActivo] = useState(null);

// const toggleSubmenu = (id) => {
//   if (window.innerWidth <= 575.98) {
//     setMenuActivo(prev => (prev === id ? null : id));
//   }
// };


//   const showCart= (e) => {
//     const contenedor = document.getElementById("cart-container");
//     if (contenedor.style.display === "none") {contenedor.style.display = "flex"
//     } else { contenedor.style.display = "none";
//     }};
//   return (<>
//        <nav className="nav">
//          <ul style={{marginBottom:'3px'}}>
   
//   <SubMenu id="bicicletas" titulo="Bicicletas">
//              <li><NavLink to="/categoria/bicicletas-MTB">MTB</NavLink></li>
//              <li><NavLink to="/categoria/bicicletas-infantiles">Infantiles</NavLink></li>
//              <li>Urbanas</li>
//              <li>Eléctricas</li>
//     </SubMenu>
           
//           <li className="submenu">
//             <ul >
//                <SubMenu id="repuestos" titulo="Repuestos">
//                <li><NavLink to="/categoria/cadenas">Cadenas</NavLink></li>
//                <li>cambios</li>
//                <li>frenos</li>
//                <li>horquillas</li>
//                <li>manijas</li>
//                <li>pedales</li>
//                </SubMenu>
//              </ul>
//            </li>
//             <li className="submenu">
//           <SubMenu id="bicicletas" titulo="Bicicletas">
       
//              <ul>
//                <li><NavLink to="/categoria/cascos">Cascos</NavLink></li>
//                <li><NavLink to="/categoria/luces">Luces</NavLink></li>
//                <li><NavLink to="/categoria/herramientas">Herramientas</NavLink></li>
//              </ul>
//               </SubMenu>
//            </li>
//            <li><NavLink to='/' className="link">Inicio</NavLink></li>
//            <li><NavLink to='/acercade' className="link">Acerca de</NavLink></li>
//            <li><NavLink to='/contacto' className="link">Contacto</NavLink></li>
//            <li><NavLink to='/login' className="link">Login</NavLink></li>
//            <li><NavLink to='/admin'><i className="fa-solid fa-user-tie"></i></NavLink></li>
//            <button className="btn-show-cart" onClick={()=> {
//                  setCartOpen(true)}}>
//             Ver carrito 
//             <i className="fa-solid fa-cart-shopping mx-1"></i>
//             {cantTotal > 0 && ( <span className="badge">{cantTotal}</span> )}
//            </button>
//            <Cart isOpen={isCartOpen}  vaciarCarrito={vaciarCarrito} 
//    isCartOpen={isCartOpen}  onClose={()=> setCartOpen(false)} />
//          </ul>
//        </nav> 
// </>
//   )}

// export default Nav;

import React, { useState, useContext } from "react";
import "./../styles/styles.css";
import Cart from '../components/Cart';
import { NavLink } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { useAuth } from "../context/AuthContext";
import SubMenu from '../components/Submenu';

const Nav = () => {
  const { isCartOpen, setCartOpen, vaciarCarrito, cantTotal } = useContext(CartContext);
  const { logout } = useAuth();
  const [menuActivo, setMenuActivo] = useState(null);

  const toggleSubmenu = (id) => {
    if (window.innerWidth <= 575.98) {
      setMenuActivo(prev => (prev === id ? null : id));
    }
  };

  return (
    <nav className="nav">
      <ul style={{ marginBottom: '3px' }}>
        <SubMenu id="bicicletas" titulo="Bicicletas" menuActivo={menuActivo} toggleSubmenu={toggleSubmenu}>
          <li><NavLink to="/categoria/bicicletas-MTB">MTB</NavLink></li>
          <li><NavLink to="/categoria/bicicletas-infantiles">Infantiles</NavLink></li>
          <li>Urbanas</li>
          <li>Eléctricas</li>
        </SubMenu>

        <SubMenu id="repuestos" titulo="Repuestos" menuActivo={menuActivo} toggleSubmenu={toggleSubmenu}>
          <li><NavLink to="/categoria/cadenas">Cadenas</NavLink></li>
          <li>Cambios</li>
          <li>Frenos</li>
          <li>Horquillas</li>
          <li>Manijas</li>
          <li>Pedales</li>
        </SubMenu>

        <SubMenu id="accesorios" titulo="Accesorios" menuActivo={menuActivo} toggleSubmenu={toggleSubmenu}>
          <li><NavLink to="/categoria/cascos">Cascos</NavLink></li>
          <li><NavLink to="/categoria/luces">Luces</NavLink></li>
          <li><NavLink to="/categoria/herramientas">Herramientas</NavLink></li>
        </SubMenu>

        <li><NavLink to='/' className="link">Inicio</NavLink></li>
        <li><NavLink to='/acercade' className="link">Acerca de</NavLink></li>
        <li><NavLink to='/contacto' className="link">Contacto</NavLink></li>
        <li><NavLink to='/login' className="link">Login</NavLink></li>
        <li><NavLink to='/admin'><i className="fa-solid fa-user-tie"></i></NavLink></li>

        <button className="btn-show-cart" onClick={() => setCartOpen(true)}>
          Ver carrito <i className="fa-solid fa-cart-shopping mx-1"></i>
          {cantTotal > 0 && (<span className="badge">{cantTotal}</span>)}
        </button>
        <Cart
          isOpen={isCartOpen}
          vaciarCarrito={vaciarCarrito}
          onClose={() => setCartOpen(false)}
        />
      </ul>
    </nav>
  );
};

export default Nav;
