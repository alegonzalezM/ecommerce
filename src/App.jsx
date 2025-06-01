import "./App.css";
import React, { useEffect, useState, useContext } from "react"
import ReactDOM from 'react-dom/client'
import {  Routes, Route } from 'react-router-dom';
import Home from "./layouts/Home"
import ProductList from './components/ProductList'
import AcercaDe from "./layouts/AcercaDe"
import Contacto from "./layouts/Contacto"
import Galeria from './layouts/Galeria'
import NotFound from './layouts/NotFound';
import DetalleProducto from "./components/DetalleProducto";
import RutaProtegida from "./auth/RutasProtegidas";
import Login from "./layouts/Login";
import Admin from './layouts/Admin';
import loading from './assets/loading.gif'
import { CartContext } from "./context/CartContext";

function App() {
  const {cart, productos, carga, error, datosAPI, isAuthenticated, cartCount, isCartOpen, setCartOpen, handleAddCart, borrarProducto} = useContext(CartContext)  
return (  
    <>
 
       <Routes>
      
       <Route path='/' element={<Home />} />

      <Route path='/productos' element={<Galeria/> }/> 

      <Route path='/acercade' element={<AcercaDe /> }/>
      
      <Route path='/contacto' element={<Contacto />}/>

      <Route path='/productos/:id' element={ <DetalleProducto />}/>

      <Route path='/admin' element={ <RutaProtegida isAuthenticated={isAuthenticated}><Admin /></RutaProtegida> } />
{/* 
      <Route path='/cart' element={ <RutaProtegida isAuthenticated={isAuthenticated}><ProductList /></RutaProtegida> } /> */}
    
      <Route path="/login" element={<Login />} />
    
      <Route path="*" element={<NotFound />} />
      

</Routes>

    </>
  )}


export default App;
