import {createContext , useState, useEffect } from 'react';
import loading from '../assets/loading.gif'
import {toast, Zoom } from 'react-toastify'
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

export const CartContext= createContext();
export const CartProvider = ({children}) =>{

  const { isAuth } = useAuth();
  const navigate = useNavigate(); 
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([])
  const [carga, setCarga]= useState(true)
  const [cargaAPI, setCargaAPI]= useState(true)
  const [error, setError] = useState(null)
  const [isCartOpen, setCartOpen]= useState(false)
  const [isAuthenticated, setIsAuth]= useState(false)
  const [datosAPI, setDatosAPI]= useState( [] )
  const [busqueda, setBusqueda] = useState("")
  const [busquedaAPI, setBusquedaAPI]= useState('')

  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);
  const cantTotal= cart.reduce((acc, item) => acc + item.cantidad, 0); //calcula cant de items en el carrito

  /*----DATOS CARGADOS DESDE MOCKAPI--------*/

useEffect(()=>{  
  
fetch("https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles")
  .then(response => response.json())
  .then(data => {
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
     .then((datos) => {
                         setTimeout(() => {
                         setProductos(datos);
                         setCarga(false); 
                          }, 1000);
    })
     .catch((error) => { setError('Hubo un inconveniente en la carga de datos');
                         setCarga(false)
  }); }, []);

  const productosFiltrados= productos.filter((producto) => producto?.name.toLowerCase().includes(busqueda.toLowerCase() ))
  const productosFiltradosAPI= datosAPI.filter((product) => product?.name.toLowerCase().includes(busquedaAPI.toLowerCase() ))

  const handleAddCart = (product) => {

      if (!isAuth) {
    navigate("/login");
    return;
  }

    const productExist = cart.find(item => item.id === product.id); 
  
    if (productExist) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === product.id
    ? { ...item, cantidad: item.cantidad + product.cantidad }
            : item
        )
      );
    } else {
        toast(`El producto ${product.name} se ha agregado al carrito`, {
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          autoClose: 2000,       
        });
setCart(prevCart => [...prevCart, { ...product, cantidad: product.cantidad }]);
      // console.log({ ...product }); 
    }
  };

  const borrarProducto = (product) => {
    toast.error(`El producto ${product.name} se ha eliminado del carrito`)
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
  
  const handleFinalizarCompra = () => {
    if (!isAuth) {
      navigate('/login');
    } else {

      console.log('Continuar con la compra...');

    }
  };

       if (carga) {return <img src={loading} alt="loading" />;
       }
      if (error) return <h2>Error al cargar los productos.</h2>; 
      
    return(
    <CartContext.Provider value={{ borrarProducto, productos, vaciarCarrito, setCart,carga, setCargaAPI, cargaAPI, error, setError, handleAddCart, cart, isCartOpen, setCartOpen, isAuthenticated, setIsAuth, datosAPI, productosFiltrados, productosFiltradosAPI, busqueda, setBusqueda, busquedaAPI, setBusquedaAPI, cantTotal, handleFinalizarCompra}} >
    {children}

    </CartContext.Provider>
 )}