import React, { useState, useContext } from "react";
import Nav from '../components/Nav';
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';
import { NavLink } from "react-router-dom";


const Contacto = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
    <div className="container-contacto">
      <Header/>
      <Nav />  
      <section id="mapa" style={{ margin: "2rem" }}>
  <h3 style={{textAlign:'left', marginLeft:'27px'}}>Cómo llegar</h3>
  <iframe
    title="Mapa"
  src="https://www.google.com/maps?q=Av+Córdoba+2023,+CABA,+Argentina&z=14&output=embed"
    width="50%"
    height="300"
    style={{ border: 0 , borderRadius: '8px'}}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</section>

      <h2 style={{ textAlign: 'left', margin: '30px 5%' }}>Formulario de contacto: </h2>
      <Formulario />
      <Footer />
    </div>
    </>
  );
};

export default Contacto;

