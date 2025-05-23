import React, { useState, useContext } from "react";
import Nav from '../components/Nav';
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';

const Contacto = () => {
  const { cart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <Header cartItems={cart} />
      <Nav />
      
      <h2 style={{ textAlign: 'left', margin: '30px 5%' }}>Formulario de contacto: </h2>
      <Formulario />
      <Footer />

    </>
  );
};

export default Contacto;

