import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AcercaDe=() => { const {cart, productos, cartCount, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito, cartItems} = useContext(CartContext);

return (

    <>
        <div className='acercaDe-container' style={{padding:'20px' }}>
<Header/>
    <Nav />
    <h1 style={{textAlign:'left', margin:'30px 5%'}}>Sobre nosotros: </h1>
    <p style={{width:'70%', margin:'auto'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusantium labore harum dicta consequatur mollitia placeat accusamus magnam cupiditate veritatis, molestiae quo quae illo commodi nihil quasi numquam. Et, quae.
    </p>
      <p style={{width:'60%', margin:'auto'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusantium labore harum dicta consequatur mollitia placeat accusamus magnam cupiditate veritatis, molestiae quo quae illo commodi nihil quasi numquam. Et, quae.
    </p>
    <p></p>
      <p style={{width:'70%', margin:'auto'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusantium labore harum dicta consequatur mollitia placeat accusamus magnam cupiditate veritatis, molestiae quo quae illo commodi nihil quasi numquam. Et, quae.
    </p>
      <p style={{width:'60%', margin:'auto'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusantium labore harum dicta consequatur mollitia placeat accusamus magnam cupiditate veritatis, molestiae quo quae illo commodi nihil quasi numquam. Et, quae.
    </p>
          <Footer/>
        </div>
        </>
    )

}
 export default AcercaDe