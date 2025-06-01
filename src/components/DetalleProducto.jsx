import React from "react";
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const DetalleProducto = () => {
     const { productos }= useContext(CartContext) 
  const { id } = useParams();
  // console.log(id, productos);

  const product = productos.find(producto => producto.id==id);
  console.log("Productos:", productos);
  return (
 <>
    {/* <Header /> */}
    <div className="container-detalleProducto">
      <h1 style={{textAlign:'left', margin:'10px'}}>Detalle del producto</h1>
      <div style={{textAlign:'left', margin:'10px', color:' 	#333333 '}}>
     
       <h3>Categoría:<span style={{color:'var(--palette-1'}}> {product.categoria}  </span></h3><br/>
         { product ? <div className='container-detalle-nombre'>{product.name}  <br/><br/>
        <span className='container-detalle-imagenes'>
       <img src={product.imagen} alt={product.name} style={{ maxWidth: '350px', height: 'auto', margin:'1em' }}  />
       {product.otrasImagenes && product.otrasImagenes.map(([id, url], index) => (
  <img key={id} src={url} alt={`${product.name} ${index + 1}`} style={{ maxWidth: '250px', margin: '1em', }}  />
))}   </span>  
{Array.isArray(product.descripcion) && (
       <ul> 
        {product.descripcion.map((item, id) => (
    <li key={id} style={{fontFamily:'var(--font-main', fontSize:'var(--font-size-xs'}}>{item}</li>
             ))}
 </ul>
)}
     <br/>
     <p className="parrafo-detalleProducto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis, pariatur atque cumque vel quia molestiae autem architecto quisquam? Voluptatibus atque repellendus porro quis facere expedita optio doloribus rem ducimus.</p>
      </div> : <h3>Producto no encontrado</h3>}
      <br/><br/>
    </div></div>
        <Footer/>
    </>);
      }

export default DetalleProducto;
