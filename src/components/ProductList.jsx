import React from "react";
import Product from "./Productos";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Cart from '../components/Cart'


const ProductList = ({ productos, addCart, cart, handleAddCart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito }) => {
  return (
  <>
    {/* <Header/> */}
    {/* <Nav cartItems={cart}  isCartOpen= {isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/> */}
    <div className='container-gallery' >
    <h1 style= {{width:'100%', textAlign:'left', margin:'30px 8%'}}>Galería de productos: </h1>
      {productos.map((producto) => (
                <Product key={producto.id} producto={producto} addCart={addCart}  />
  ))}

   </div>
      {/* <Footer/> */}
  </>
  )}
export default ProductList
