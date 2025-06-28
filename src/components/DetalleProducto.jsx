import React from "react";
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Nav from "./Nav";
import NotFound from '../components/NotFound'

const DetalleProducto = () => {
     const { productos }= useContext(CartContext) 

  const { id } = useParams();

  const product = productos.find(producto => producto.id==id);

 if (!product) {
    return (
        <NotFound />
    );
 }
  return (
 <>
    {/* <Header />
    <Nav/> */}
    <div className="container-detalleProducto mb-4">
      <h1 style={{textAlign:'left', margin:'10px'}} id='detalle-title'>Detalle del producto</h1>
      <div style={{textAlign:'left', margin:'10px', color:' 	#333333 '}}>
     
       <h3>Categoría:<span style={{color:'var(--palette-1'}}> {product.categoria}  </span></h3><br/>
         { product ? <div className='container-detalle-nombre'>{product.name}  <br/><br/>
        <span className='container-detalle-imagenes'>
       <img src={product.imagen} alt={product.name} />
       {product.otrasImagenes && product.otrasImagenes.map(([id, url], index) => (
  <img key={id} src={url} alt={`${product.name} ${index + 1}`}  />
))}   </span>  
         
{Array.isArray(product.descripcion) && (
       <ul> 
        {product.descripcion.map((item, id) => (
    <li key={id} style={{fontFamily:'var(--font-main', fontSize:'var(--font-size-xs'}}>{item}</li>
             ))}
 </ul>
)}
     <br/>
     <p className="parrafo-detalleProducto">Algunos componentes pueden variar levemente respecto a la descripción o las imágenes publicadas, en función de disponibilidad o mejoras técnicas, siempre garantizando la misma calidad y rendimiento del producto. Todas nuestras bicicletas se entregan con servicio técnico completo, asegurando su óptimo funcionamiento desde el primer uso. </p>
      </div> : <h3>Producto no encontrado</h3>}
      <br/>
    </div>

            {/* <Footer/> */}
    </div>  
    </>);
      }

export default DetalleProducto;
