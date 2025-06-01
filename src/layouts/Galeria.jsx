import React, { useContext } from 'react';
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext';


const Galeria= ()=> { 
  const {carga}=  useContext(CartContext);

    if (carga || cargaAPI) {
    return <img src={loading} alt="loading" />;
  }
    return(
        <>
          <ProductList />  
          <Footer />
        </>    
  );
};
export default Galeria