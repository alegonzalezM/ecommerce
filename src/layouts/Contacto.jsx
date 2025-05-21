import React from "react";
import Nav from '../components/Nav'
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Footer from '../components/Footer'

const Contacto = ({cart, productos, cartCount, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito, cartItems}) => {
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto}/>
      <Nav cartItems={cart}  vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/>
      <h1 style={{textAlign:'left', margin:'30px 5%'}}> Contacto</h1>

      <Footer />
    </>
  );
};

export default Contacto;
