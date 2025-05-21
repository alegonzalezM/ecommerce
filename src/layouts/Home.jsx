import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { productList } from '../utils/data.js'
import ProductList from '../components/ProductList'
import Formulario from '../components/Formulario'
import Cart from '../components/Cart'
import loading from '../assets/loading.gif'
import CartShow from '../components/CartShow.jsx'
import { useState, useEffect } from 'react'
import NotFound from '../components/NotFound'


    const Home= ({cart, productos, carga, isCartOpen, setCartOpen, addCart, borrarProducto, vaciarCarrito, cartCount }) =>{
        return(
            <>
            <Header cartItems={cart} borrarProducto={borrarProducto}/>
            <h1>Bienvenidos</h1>
            <p>lorem</p>
    <Nav cartItems={cart}  vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} addCart={addCart}/>

            {carga ? <img src={ loading } alt='loading' /> : 
            <ProductList addCart={addCart}  productos={productos}/>
        }
            <Footer/>
     </>    
        )}
// const main= ({data})=> {
//     console.log(data);}

export default Home;