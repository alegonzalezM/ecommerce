import React, {useState, useContext, useEffect} from "react";
import '../styles/styles.css'
import { Link } from "react-router-dom";
import Nav from '../components/Nav'
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Card } from "../components/Card"

const Productos = ({ producto }) => { 
const { handleAddCart } = useContext(CartContext);
const [cantidad, setCantidad] = useState(1);

const { isAuth } = useAuth();  
const navigate = useNavigate();


// const [productos, setProductos] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3006/api/articulos") // llama al backend
//       .then(res => res.json())
//       .then(data => setProductos(data))
//       .catch(err => console.error(err));
//   }, []);


const increase= () => setCantidad( prev => (prev < producto.stock ? prev+1 : prev))
const decrease= () => setCantidad( prev => (prev >1 ? prev -1 : 1 ))

const handleClick = (producto) => {
  if (!isAuthenticated) {
    navigate("/login");
  } else {
    handleAddCart({ ...producto, cantidad });
  }

};
  return (
    <>
    <Card>
    <section className="card-bike">

     {/* <h2>Prueba de API</h2>
      {productos.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>${p.price}</p>
        </div>
      ))} */}

    <div className=" col product-list m-1 w-100">
   
      {/* <div className="col col-card-img"><img src={producto.image}  alt={producto.name} style={{ margin:'auto', width:'15em' }}/></div> */}
<div className="col col-card-img-container">
  <img src={producto.image} alt={producto.name} style={{ width:'22em' }} />
  <div className="contenedor-hidden">
    <button
      className="product-btn"
      onClick={() => handleAddCart({ ...producto, cantidad })}
    >
      Agregar al carrito
    </button>
   
        <span className="qty-cantidad">{cantidad}</span>
         <div className="cant-container">
      <button className="qtyButton" onClick={decrease}>-</button>
    
      <button className="qtyButton" onClick={increase}>+</button>
    </div>
  </div>
</div>

  
      <div style={{display: 'flex' , flexDirection:'row', padding:'3px', alignItems:'center'}}>
      <div className="col" style={{fontWeight:'700', textAlign:"left", margin:"2px"}}>COD: {producto.codigo} </div>
      <div className="col col-card-price " style={{textAlign:"right", paddingRight:"7px"}}>${producto.price} </div>
      </div>
             <div className="col-card-name ">{producto.name}  </div>
      {/* <div className="col col-card-stock m-1">stock:{producto.stock} </div> */}
      <div className="col-3  div-product-btn w-100">
    
  
      </div> 
    
      <Link to={`productos/${producto.id}`} className="link-productos">Ver mas</Link>
     {producto.mostrarLink === true && ( <Link to={`/productos/${producto.id}`} className="link-productos">
    Ver más </Link>
    
   )}
    

    </div>
    </section>
 </Card> 
  </>
  )
}
export default Productos;
