import React, { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';
import Pagination from 'react-bootstrap/Pagination'

  const MuestraAPI = ({ dato }) => {
  const [cantidad, setCantidad] = useState(1);

 return (
    <>
             <section className='card-news' key={dato.name}>
                <div>ID: {dato.id}</div>
                <div className="card-news-id"></div>
                <div className="card-news-name m-1">{dato.name}</div>

                <div className="card-news-avatar m-1">{dato.name}</div>
                <div className="card-news-img">
               <img  src={dato.image}  alt={dato.name}  style={{ width: '9em' , maxHeight:'9em'}}/></div>

                {/* <div className="card-news-description">{dato.description}</div> */}
                <div className="card-news-price mt-2"><strong>${dato.price}</strong></div>
                {/* <div className="card-news-stock ">Stock: {dato.stock}</div> */}
        
            </section>
    </>
  );
};

export default MuestraAPI;

