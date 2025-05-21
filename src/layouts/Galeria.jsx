import React from 'react'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'


const Galeria= ({cart, productos, cartCount, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito, cartItems, carga, error }) =>{
    return(
        <>
   
    
        carga ? <img src={ loading } alt='loading' /> : 
        <ProductList addCart={addCart} productos={productos} />
        <Footer/>
 </>    
    )}


  export default Galeria