import {createContext , useState, useEffect } from 'react';
import loading from '../assets/loading.gif'

export const CartContext= createContext();
export const CartProvider = ({children}) =>{

  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([])
  const [carga, setCarga]= useState(true)
  const [cargaAPI, setCargaAPI]= useState(true)
  const [error, setError] = useState(null)
  const [isCartOpen, setCartOpen]= useState(false)
  const [isAuthenticated, setAuthenticated]= useState(false);
  const [datosAPI, setDatosAPI]= useState( [] );


  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

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

/*----DATOS CARGADOS DESDE MOCKAPI--------*/

useEffect(()=>{  
  
fetch("https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles")
  .then(response => response.json())
  .then(data => {
    console.log("Datos traídos de Mockapi:", data);
      setTimeout(() => {
        setDatosAPI(data);
        setCargaAPI(false);
      }, 1000);
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error);
      setError("Hubo un inconveniente en la carga de datos");
      setCargaAPI(false);
    });
}, []);

     
/*-------DATOS CARGADOS DESDE PRODUCTOS.JSON--------*/

     useEffect(()=>{
      fetch('/data/productos.json')
     .then((res) => res.json())
     .then((datos) => {console.log("Datos guardados en JSON : ", datos)
                         setTimeout(() => {
                         setProductos(datos);
                         setCarga(false); 
                          }, 1000);
    })
     .catch((error) => { setError('Hubo un inconveniente en la carga de datos');
                         setCarga(false)
  }); }, []);
       if (carga) {return <img src={loading} alt="loading" />;
       }
      if (error) return <h2>Error al cargar los productos.</h2>; 
      
    return(
    <CartContext.Provider value={{ borrarProducto, productos, vaciarCarrito, setCart,carga, setCargaAPI, cargaAPI, error, handleAddCart, cart, isCartOpen, setCartOpen, isAuthenticated, setAuthenticated, datosAPI}} >
    {children}
    </CartContext.Provider>
 )}