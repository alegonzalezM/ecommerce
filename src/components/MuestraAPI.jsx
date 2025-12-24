// import React, { useState, useContext } from "react";
// import { CartContext } from '../context/CartContext';
// import Pagination from 'react-bootstrap/Pagination'

//   const MuestraAPI = ({ dato }) => {
//   const [cantidad, setCantidad] = useState(1);
   
//   console.log(`${dato.imagen} ` )
//  return (
//     <>
//              <section className='card-news' key={dato.id}>
//                 <div>ID: {dato.id}</div>
//                 <div className="card-news-id"></div>
//                      {/* <img src={dato.imagen} alt={dato.nombre} /> */}
//                   <img className="producto-img" src={dato.imagen?.trim()}
//                     alt={dato.detalle}
//                     onError={(e) => {
//                       e.currentTarget.src = "/imagenes/sin-imagen.jpg";
//                     }}
//                   />


  
//                <div className="card-news-name m-1">{dato.detalle}</div>
//                <div className="">$ {dato.precio}</div>
//                 {/*  <div className="card-news-avatar m-1">{dato.avatar}</div>
//                 <div className="card-news-img">
//                <img  src={dato.image}  alt={dato.name}  style={{ width: '9em' , maxHeight:'9em'}}/></div>

//                 <div className="card-news-description">{dato.description}</div>
//                 <div className="card-news-price mt-2"><strong>${dato.price}</strong></div> */}
//                 {/* <div className="card-news-stock ">Stock: {dato.stock}</div> */}
        
//             </section>
//     </>
//   );
// };

// export default MuestraAPI;

import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MuestraAPI = ({ dato }) => {
  const { handleAddCart } = useContext(CartContext);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const [cantidad, setCantidad] = useState(1);

  const increase = () => setCantidad((prev) => prev + 1);
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  const handleClick = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      handleAddCart({ ...dato, cantidad });
    }
  };

  return (
    <Card>
      <section className="card-bike">

        <div className="col product-list m-1 w-100">

          <div className="col-card-name">
            {dato.detalle}
          </div>

          <div className="col col-card-img">
            <img
              src={dato.imagen?.trim()}
              alt={dato.detalle}
              className="producto-img"
              onError={(e) => {
                e.currentTarget.src = "/imagenes/sin-imagen.jpg";
              }}
            />
          </div>

          <div className="col col-card-price m-1">
            ${dato.precio}
          </div>

          <div className="col-3 div-product-btn w-100">
            <button
              className="product-btn m-1 w-75"
              onClick={handleClick}
            >
              Agregar al carrito
            </button>
          </div>

          <div className="cant-container">
            <button className="qtyButton" onClick={decrease}>-</button>
            <span>{cantidad}</span>
            <button className="qtyButton" onClick={increase}>+</button>
          </div>

        </div>
      </section>
    </Card>
  );
};

export default MuestraAPI;




