import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AcercaDe=({cart, productos, cartCount, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito, cartItems} ) => {

return (

    <>
        <div className='acercaDe-container' style={{padding:'20px' }}>
<Header/>
    <Nav cartItems={cart}  vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/>
    <h1 style={{textAlign:'left', margin:'30px 5%'}}>Sobre nosotros: </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatem consectetur. Quibusdam quod beatae vel dolorem excepturi quidem natus voluptates sed officia? Dolore, molestias maxime harum nobis suscipit eius debitis.</p>
          <Footer/>
        </div>
        </>
    )

}
 export default AcercaDe