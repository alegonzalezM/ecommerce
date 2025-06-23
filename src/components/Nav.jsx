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
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MENU</a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse lista-contacto" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav" >  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
         
            <li className="nav-item dropdown  submenu">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bicicletas
              </a>
              <ul className="dropdown-menu sublista">
                <li><a className="dropdown-item" href="#">MTB</a></li>
                <li><a className="dropdown-item" href="#">Urbanas</a></li>
                <li><a className="dropdown-item" href="#">Eléctricas</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Usadas</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Repuestos
              </a>
              <ul className="dropdown-menu sublista">
                <li><a className="dropdown-item" href="#">cadenas</a></li>
                <li><a className="dropdown-item" href="#">cambios</a></li>
                <li><a className="dropdown-item" href="#">frenos</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">horquillas</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown submenu">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Accesorios
              </a>
              <ul className="dropdown-menu sublista">
                <li><a className="dropdown-item" href="#">cascos</a></li>
                <li><a className="dropdown-item" href="#">luces</a></li>
                <li><a className="dropdown-item" href="#">herramientas</a></li>
                <li><a className="dropdown-item" href="#">varios</a></li>
              </ul>
            </li>
           
             
           <li><NavLink to='/acercade' className="link">Acerca de</NavLink></li>
           <li><NavLink to='/contacto' className="link">Contacto</NavLink></li>
           <li><NavLink to='/login' className="link">Login</NavLink></li>
           <li><NavLink to='/admin'><i className="fa-solid fa-user-tie"></i></NavLink></li>
          
              
          <button className="btn-show-cart" onClick={()=> {
            setCartOpen(true)}}>
       Ver carrito 
       <i className="fa-solid fa-cart-shopping mx-1"></i>
      </button>
      </ul>
      <Cart isOpen={isCartOpen}  vaciarCarrito={vaciarCarrito} 
isCartOpen={isCartOpen}  onClose={()=> setCartOpen(false)} />
        </div>
      </div>
    </nav>
    </>
  )} */}

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
       {/* <button className='navBtn'  onClick= {logout()} >
  
  Cerrar sesión
</button> */}
         </ul>
       </nav> 
</>
  )}

export default Nav;
