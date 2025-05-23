import React from 'react'

import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Admin= () => {const { cart, productos, cartCount, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito, cartItems, carga, error } =useContext(CartContext);
    return(
        <>
   <div>
    <h1>ADMIN</h1>
   </div>
    
     
 </>    
    )}

export default Admin;