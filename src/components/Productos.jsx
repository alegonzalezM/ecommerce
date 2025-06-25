import React, {useState, useContext} from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/styles.css'
import { Link } from "react-router-dom";
import Nav from '../components/Nav'
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';


const Productos = ({ producto }) => { 
const { handleAddCart } = useContext(CartContext);
const [cantidad, setCantidad] = useState(1);

const { isAuth } = useAuth();  
const navigate = useNavigate();


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
    <section className="card-bike">
    <div className=" col product-list m-1 w-100">
      <div className="col-card-name ">{producto.name}  </div>
      <div className="col col-card-img"><img src={producto.imagen}  alt={producto.name} style={{ margin:'auto', width:'12em' }}/></div>
      <div className="col ">{producto.trademark} </div>
      <div className="col col-card-price m-1">${producto.price} </div>
      <div className="col col-card-stock m-1">stock:{producto.stock} </div>
      <div className="col-3  div-product-btn w-100">
    
      <button className='product-btn m-1 w-75' onClick={() => handleAddCart({ ...producto, cantidad })}>Agregar al carrito</button>

      </div> 
      <Link to={`productos/${producto.id}`} className="link-productos">Ver mas</Link>
  
      <div className='cant-container'>
        <button className="qtyButton" onClick={(decrease)}>-</button>
        <span>{cantidad}</span>
        <button className="qtyButton" onClick={(increase)}>+</button>
      </div>
    </div>
    </section>

  </>
  )
}
export default Productos;
