import React from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = ({ productos }) => {
  const { id } = useParams();
//   console.log(id, productos);
// const productId = parseInt(id, 10); 
  const product = productos.find(producto  => producto.id==id);
  console.log("ID params:", id);
  console.log("Productos:", productos);
  console.log("Producto encontrado:", product);
  return (
    <>
    <div className="container-detalleProducto">
      <h2 style={{textAlign:'left', margin:'20px'}}>Detalle del producto {id}</h2>
      <div style={{textAlign:'left', margin:'20px'}}>
      {product ? <p>{product.name}  {product.price} <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis, pariatur atque cumque vel quia molestiae autem architecto quisquam? Voluptatibus atque repellendus porro quis facere expedita optio doloribus rem ducimus.</p>:<h3>Producto no encontrado</h3>}
    </div>
    </div>
    </>
  );
};
export default DetalleProducto;
