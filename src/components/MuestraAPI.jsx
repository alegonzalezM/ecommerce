import React, { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';

// const MuestraAPI = () => {
// const { datosAPI} = useContext(CartContext);
  const MuestraAPI = ({ datosAPI }) => {
  const [cantidad, setCantidad] = useState(1);

 return (
    <>
      <h2 style={{ width: '100%', textAlign: 'left', margin: '30px 8%', color:'#4caf50' }}>Novedades:</h2>
      <div className="card-news-container" style={{ padding: '0 5%' }}>
          {datosAPI.map((dato) => (
            <section className='card-news' key={dato.id}>
              <div className="card-news-id" > </div>
                <div className="card-news-name m-2">{dato.name}</div>

                <div className="card-news-avatar m-2">{dato.avatar}</div>
                <div className="card-news-img">
               <img  src={dato.image}  alt={dato.name}  style={{ width: '9em' , maxHeight:'9em'}}/></div>

                <div className="card-news-description">{dato.description}</div>
                <div className="card-news-price m-1">${dato.price}</div>
                <div className="card-news-stock m-1">Stock: {dato.stock}</div>
        
            </section>
          ))
}
      </div>
    </>
  );
};

export default MuestraAPI;

