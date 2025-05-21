import React, {useState} from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/styles.css'
import { Link } from "react-router-dom";

const Productos = ({ producto, addCart }) => {
const [cantidad, setCantidad] = useState(1);
const increase= () => setCantidad( prev => (prev < producto.stock ? prev+1 : prev))
const decrease= () => setCantidad( prev => (prev >1 ? prev -1 : 1 ))

  return (
    <>

    <section className="card">
    <div className=" col product-list m-2 w-100">
      <div className="col-card-name ">{producto.name}  </div>
      <div className="col col-card-img "><img src={producto.imagen}  alt={producto.name} style={{ width: '12em', height: 'auto' }}/>  <div className="col ">{producto.trademark} </div>
      <div className="col col-card-price m-2">${producto.price} </div>
      <div className="col col-card-stock m-2">stock:{producto.stock} </div>
      <div className="col-3  div-product-btn">
      <button className='product-btn bg-success-subtle m-3' onClick={()=> addCart(producto)}>Agregar</button></div>
      <Link to={`productos/${producto.id}`} >Ver mas</Link>
      <div className='cant-container'>
        <button className="qtyButton" onClick={(decrease)}>-</button>
        <span>{cantidad}</span>
        <button className="qtyButton" onClick={(increase)}>+</button>
      </div>
    </div></div>
    </section>

  </>
  )
}
export default Productos;
