import React, { useContext } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import loading from '../assets/loading.gif';
import { CartContext } from '../context/CartContext';
import MuestraAPI from '../components/MuestraAPI'


const Home = () => { const { carga, cargaAPI, datosAPI } = useContext(CartContext);
 
         return(
            <>
            <div className="container-fluid">
            <Header />
            <h1>Bienvenidos</h1>
            <p style={{width:'50%', margin: '.5em auto'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis in est enim molestiae, ducimus maiores fugit odio magnam blanditiis exercitationem incidunt architecto. Quos repellendus esse sint quod facilis soluta odit!</p>
            <br/>
            <Nav />

            {
            carga ? <img src={loading } alt='loading' /> : 
            <ProductList />

        }
            <MuestraAPI datosAPI={datosAPI}/>
            <Footer/>
        </div>
     </>    
        )}
export default Home;
