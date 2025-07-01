import React, { useContext } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ProductList from '../components/ProductList';
import MuestraAPIList from '../components/MuestraAPIList';
import WhatsApp from '../components/WhatsAppWidget';
import Footer from '../components/Footer';
import loading from '../assets/loading.gif';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const context = useContext(CartContext);
  if (!context) {
    return <p>Esperando contexto...</p>;
  }

<<<<<<< HEAD
  const { carga, error } = context;
=======
const Home = () => { const { carga, cargaAPI, datosAPI } = useContext(CartContext);
 
         return(
            <>
            <div className="container-fluid">
            <Header />
            <h1>Bienvenidos</h1>
            <p style={{width:'50%', margin: '.5em auto'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis in est enim molestiae, ducimus maiores fugit odio magnam blanditiis exercitationem incidunt architecto. Quos repellendus esse sint quod facilis soluta odit!</p>
            <br/>
            <Nav />
>>>>>>> e2c77cbbb5cf96f0e6edf504a888a6e6994bd0dd

  if (typeof carga === 'undefined' || carga) {
    return (
      <div style={{ textAlign: 'center', margin: '2rem' }}>
        <img src={loading} alt="Cargando..." />
      </div>
    );
  }

<<<<<<< HEAD
  if (error) {
    return (
      <div style={{ textAlign: 'center', margin: '2rem', color: 'red' }}>
        Error al cargar los productos.
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <Header />
      <h1 style={{ margin: '10px' }}>Bienvenidos</h1>
      <p className="parrafo-home">
                  En URBAN BIKES compartimos tu pasión por las dos ruedas. Somos un equipo
          de especialistas comprometidos con brindar atención personalizada,
          productos de calidad y servicio técnico confiable para que disfrutes
          cada kilómetro con seguridad y confianza.
        </p>
        <p className="parrafo-home">
          Ya sea que seas ciclista urbano, amante del mountain bike o estés dando
          tus primeros pedaleos, tenemos todo lo que necesitás: bicicletas,
          accesorios, repuestos, mantenimiento y asesoramiento a medida.
          </p>

      <Nav />
      <ProductList />
      <MuestraAPIList />
      <WhatsApp />
      <Footer />
    </div>
  );
};

=======
        }
            <MuestraAPI datosAPI={datosAPI}/>
            <Footer/>
        </div>
     </>    
        )}
>>>>>>> e2c77cbbb5cf96f0e6edf504a888a6e6994bd0dd
export default Home;
