import React from "react";
import Product from "./Productos";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Cart from '../components/Cart'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'


const ProductList = () => { const { productos, addCart, cart, handleAddCart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito }=useContext(CartContext) 
  return (
  <>
    <div className='container-gallery' >
    <h2 style= {{ color:'#4caf50', width:'100%', textAlign:'left', margin:'30px 8%'}}>Galería de productos: </h2>
      {productos.map((producto) => (
          <Product key={producto.id} producto={producto} addCart={addCart}/>
  ))}

   </div>
  {/* <Footer/>  */}
  </>
  )}
export default ProductList
