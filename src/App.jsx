import "./App.css";
import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./layouts/Home"
import ProductList from './components/ProductList'
import AcercaDe from "./layouts/AcercaDe"
import Contacto from "./layouts/Contacto"
import Galeria from './layouts/Galeria'
import NotFound from './components/NotFound'
import DetalleProducto from "./components/DetalleProducto";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Cart from './components/Cart'

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <ReactStrictMode StrictMode>
//     <Router>
//       <App/>
//     </Router>
//    </ReactStrictMode>
// )

// agregar consumo de 1 API!!!
function App() {
  
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([])
  const [carga, setCarga]= useState(true)
  const [error, setError] = useState(null)
  const [isCartOpen, setCartOpen]= useState(false)

  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

  console.log('cartCount: ' , cartCount, cart);

  const handleAddCart = (product) => {
    const productExist = cart.find(item => item.id === product.id); 
  
    if (productExist) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { ...product, cantidad: 1 }]);
      console.log( "Carrito lleno" ); 
      console.log({ ...product }); 
    }
  };
  
  

  const borrarProducto = (product) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.id === product.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              return null; 
            }
          } else {
            return item; 
          }
        })
        .filter(item => item !== null); 
    });
  };
  

     const vaciarCarrito=()=>{
      setCart([]);
     };

     useEffect(()=>{
      fetch('/productos.json')
  
     // fetch('https://6814cc8c225ff1af162a23f1.mockapi.io/producto')
     .then((res) => res.json())
     .then((datos) => {console.log( datos)
                         setTimeout(()=>{
                         setProductos(datos) },200)
                         setCarga(false) })
     .catch((error) => { setError('Hubo un inconveniente en la carga de datos');
                         console.log('Error: ', error)
                         setCarga(false)
  }); }, []);
      if (carga) return <p>Cargando productos</p>
     //  if (error) return ({carga ? loading : })  
return (  
    <>
    <Router>
       <Routes>
      
       <Route path='/' element={<Home productos={productos} error={error} carga={carga} cart={cart} cartItems={cart} isCartOpen={isCartOpen} setCartOpen={setCartOpen} addCart={handleAddCart} borrarProducto={borrarProducto} vaciarCarrito={() => setCart([])} />}/>
  

      <Route path='/productos' element={<Galeria cart={cart} carga={carga}  error={error} productList={ProductList}  isCartOpen={isCartOpen} setCartOpen={setCartOpen} addCart={handleAddCart} cartItems={cart} borrarProducto={borrarProducto}/> }/> 

      <Route path='/acercade' element={<AcercaDe cart={cart}  error={error} carga={carga} productos={productos}  cartItems={cart} isCartOpen={isCartOpen} setCartOpen={setCartOpen} addCart={handleAddCart} borrarProducto={borrarProducto}/> }/>
      
      <Route path='/contacto' element={<Contacto cart={cart} carga={carga} error={error} addCart={handleAddCart} borrarProducto={borrarProducto} isCartOpen={isCartOpen} setCartOpen={setCartOpen} cartItems={cart}/>}/>

      <Route path='/productos/:id' element={ <DetalleProducto productos={productos}/>}/>

      <Route path='*' element={<NotFound/>}/>

</Routes>
</Router>

        {/* <div className="container-fluid bg-light p-5 w-100"></div> */}

    </>
  )}


export default App;
