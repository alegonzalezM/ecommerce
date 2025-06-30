import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NotFound from '../components/NotFound'
import ParrafoTecnico from "./ParrafoTecnico";
import { NavLink }  from 'react-router-dom';

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
    <div style={{ width:'90%', display:'flex', justifyContent:'space-around',padding:'10px', alignItems:'center'}}>
      <h1 style={{textAlign:'left', margin:'10px', width:'50%'}} id='detalle-title'>Detalle del producto</h1>
      <span style={{alignItems:'rigth', width:'20%' }}><NavLink to='/' id="link-detalle" style={{color:' #72cb10' }}>Volver al inicio</NavLink></span></div>
    <div className="container-detalleProducto mb-4">

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
     <div className="parrafo-detalleProducto">{product?.mostrarParrafo && <ParrafoTecnico />} </div>
      </div> : <h3>Producto no encontrado</h3>}
      <br/>
    </div>
       {/* <Footer/> */}
 
    </>);
      }

export default DetalleProducto;
