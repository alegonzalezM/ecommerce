import React, {useState} from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/urban-bikes-t.png'
import Cart from './Cart'

const Header=({ cartItems, borrarProducto }) =>{
   const [isCartOpen, setCartOpen]= useState(false)
   
 return(
    <header >
    
       <ul className="lista-contacto ">
         <li className=""><i className='fa-brands fa-whatsapp icono' ></i>Tel:011 3333333</li>
         <li><i className='fa-solid fa-phone icono' ></i>Tel:011 3333333</li>
         <li><i className="fa-regular fa-envelope icono"></i>urbanbikes@gmail.com</li>
         <li><i className='fa-solid fa-location-dot icono' ></i>Av xxxxxx 1111 - CABA - Bs As - Argentina</li>
       </ul>
       <div id='#logo'></div>
       <img style={{ width: "11%", paddingLeft: "5px" }} src={logo} /> 
       <h1 className="header-title">URBAN<br/> BIKES</h1>

    </header>
 )
}
export default Header;