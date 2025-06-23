import React, { useContext } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ProductList from '../components/ProductList';
import MuestraAPIList from '../components/MuestraAPIList'
import Footer from '../components/Footer';
import loading from '../assets/loading.gif';
import { CartContext } from '../context/CartContext';
import MuestraAPI from '../components/MuestraAPI'
import WhatsApp from '../components/WhatsAppWidget';


const Home = () => { const { carga, datosAPI } = useContext(CartContext);
 
         return(
            <>
            <div className="container-fluid">
            <Header />
            <h1 style={{margin:'10px'}}>Bienvenidos</h1>
            <p className="parrafo-home">En URBAN BIKES compartimos tu pasión por las dos ruedas. Somos un equipo de especialistas comprometidos con brindar atención personalizada, productos de calidad y servicio técnico confiable para que disfrutes cada kilómetro con seguridad y confianza.</p>
            <p  className="parrafo-home"> Ya sea que seas ciclista urbano, amante del mountain bike o estés dando tus primeros pedaleos, tenemos todo lo que necesitás: bicicletas, accesorios, repuestos, mantenimiento y asesoramiento a medida.</p>
            
            <br/>
            <Nav />

            {
            carga ? <img src={loading } alt='loading' /> : 
            <ProductList />

        }
    <MuestraAPIList/>
    <WhatsApp />
    <Footer/>
        </div>
     </>    
        )}
export default Home;