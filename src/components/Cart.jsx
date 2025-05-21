import React from 'react';
import "./../styles/styles.css";

const Cart = ({ cartItems = [],  vaciarCarrito,  isOpen, onClose, borrarProducto }) => {
  console.log('Cart recibe cartItems:', cartItems);
  return (
    <div id='cart-container' className={`cart-container ${ isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 className='cart-title'>Carrito</h2>
        <button onClick={onClose} className='close-button '>X</button>
      </div>

      <div className='cart-content'>
      {(!cartItems || cartItems.length === 0) ? ( <p style={{ color: 'green' }}>Carrito vacío</p> ) : ( 
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={item.id || index}>
                          <div className="row ">
                  <div className="col-5 mx-2  px-3 col-name">
                
                  {item.name} 
                  </div>
                  <div className="col  px-3 mx-2 ">
                   ${item.price} 
                   </div>
                   <div className="col text-white px-3 mx-2 my-2">
                   <img src={item.imagen} alt={item.name}  /> 
                   </div>
                   <div className="col px-3 mx-2 col-cantidad" >
                     cant: {item.cantidad}
                     </div>
                
                     <div className="col mx-2 px-3 ">
                  <button onClick={() => borrarProducto(item)}
                    className='btn btn-sm btn-outline-success ms-2' >
                    <i className='fa-solid fa-trash'></i>
                  </button>
                  </div>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={vaciarCarrito}
              className='btn btn-success-subtle mt-3'
            >
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
