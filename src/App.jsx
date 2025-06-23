import "./App.css";
import React, { useEffect, useState, useContext } from "react"
import {  Routes, Route } from 'react-router-dom';
import Home from "./layouts/Home"
import AcercaDe from "./layouts/AcercaDe"
import Contacto from "./layouts/Contacto"
import Galeria from './layouts/Galeria'
import NotFound from './layouts/NotFound';
import DetalleProducto from "./components/DetalleProducto";
import RutaProtegida from "./auth/RutasProtegidas";
import Login from "./layouts/Login";
import Admin from './layouts/Admin';
import Cart from './components/Cart';
import { CartContext } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";

function App() {

return (  
    <>
 
       <Routes>
      
      <Route path='/' element={<Home />} />

      <Route path='/productos' element={<Galeria/> }/> 

      <Route path='/acercade' element={<AcercaDe /> }/>
      
      <Route path='/contacto' element={<Contacto />}/>
  
      <Route path='/productos/:id' element={ <DetalleProducto />}/>

      <Route path="/login" element={<Login />} />

      <Route path='/admin' element={ <RutaProtegida  requiredRole='admin' ><Admin /></RutaProtegida> } />
      
      <Route path='/cart' element={ <RutaProtegida><Cart/></RutaProtegida> } />
    
      <Route path="*" element={<NotFound />} />
      

</Routes>

    </>
  )}


export default App;
