import React from "react";
import "./../styles/styles.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, useLocation } from 'react-router-dom';
import RutaProtegida from '../auth/RutasProtegidas';
import { useAuth } from '../context/AuthContext';


const Cart = ({ isOpen, onClose }) => {

  const { cart, vaciarCarrito, borrarProducto, handleFinalizarCompra} = useContext(CartContext);

  return (
    <div
      id="cart-container"
      className={`cart-container ${isOpen ? "open" : ""}`}
    >
      <div className="cart-header">
        <h2 className="cart-title">Carrito</h2>
        <button onClick={onClose} className="close-button ">
          X
        </button>
      </div>

      <div className="cart-content">
        {cart.length === 0 ? (
          <p>Carrito vacío</p>
        ) : (
          <>
             <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th className="text-start">Producto</th>
                  <th className="text-center">Precio</th>
                  <th className="text-center">Cantidad</th>
                  <th className="text-end">Subtotal</th>
                  <th className="text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id || index}>
                    <td className='text-start'>{item.name}</td>
                    <td className="text-end">${Number(item.price)}</td>
                    <td className="text-center">{item.cantidad}</td>
                    <td className="text-end">
                      ${Number(item.price * item.cantidad)}</td>
                    <td className="text-center">
                      <button onClick={() => borrarProducto(item)}
                        className="btn btn-sm btn-outline-success"><i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>

                ))}
                  <tr>
                     <td colSpan="2" className="text-start fw-bold">Total:</td>
                     <td colSpan='2' className="text-end fw-bold text-success" id="precio-final">
      ${cart.reduce((acc, item) => acc + item.price * item.cantidad, 0).toLocaleString('es-AR')}</td>
                     <td></td>
                  </tr>
                <tr>
                   <td></td>
                   <td></td>
                  <td colSpan='3'>  
                    <button className="btn-comprar" onClick={ (handleFinalizarCompra) }>Finalizar compra</button></td>
                </tr>
              </tbody>
            </table>
 
           
            <button
              onClick={vaciarCarrito}
              className="btn btn-success-subtle mt-3 btn-vaciar"
            >
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    <div className="cart-footer"> 
    </div>
    </div>
  );
};

export default Cart;
