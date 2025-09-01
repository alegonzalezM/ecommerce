//https://www.dalsanto.com.ar/images/stories/virtuemart/product/BIN163005.jpg

import {createContext , useState, useEffect } from 'react';
import loading from '../assets/loading.gif'
import {toast, Zoom } from 'react-toastify'
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
// import PaginaConDelay from '../components/PaginaConDelay';

export const CartContext= createContext();
export const CartProvider = ({children}) =>{   //provee las variables, estados, funciones, etc

  const { isAuth } = useAuth();
  const navigate = useNavigate(); 
  const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart") //guarda lo q hay en localStorage y lo uso en el useEffect
        try{ const parsed = savedCart ? JSON.parse(savedCart) : []
    return Array.isArray(parsed) ? parsed : []    //op ternario, si hay algo en el carrito lo parsea, sino array vacío
  } catch (e) {                                  //Array.isArray me asegura que siempre sea 1 array y no de error
    return [] // si falla el parseo}
  }
  });

  const [carga, setCarga]= useState(true)
  const [cargaAPI, setCargaAPI]= useState(true)
  const [error, setError] = useState(null)
  const [isCartOpen, setCartOpen]= useState(false)
  const [isAuthenticated, setIsAuth]= useState(false)
  const [datosAPI, setDatosAPI]= useState( [] )
  const [busqueda, setBusqueda] = useState("")
  const [busquedaAPI, setBusquedaAPI]= useState('')
  const[categoria, setCategoria]= useState('todas')
  const[productos, setProductos]= useState([])
  const [loading, setLoading]= useState(true)


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
     localStorage.setItem("cart" , JSON.stringify(cart))
}, []);

     
/*-------DATOS CARGADOS DESDE PRODUCTOS.JSON--------*/

  //    useEffect(()=>{
  //     fetch('/data/precios.json')
  //    .then((res) => res.json())
  //    .then((datos) => {
  //                        setTimeout(() => {
  //                        setPrecios(datos);
  //                        setCarga(false); 
  //                         }, 1000);
  //                         console.log(datos)
  //   })
  //    .catch((error) => { setError('Hubo un inconveniente en la carga de datos');
  //                        setCarga(false)
  // }); }, []);


useEffect(() => {
  fetch("http://localhost:3006/api/articulos")
  
     .then((res) => res.json())
     .then((datos) => {
                         setTimeout(() => {
                         setProductos(datos);
                         setCarga(false); 
                         setLoading(false);
                          }, 1000);
                          console.log(datos)
    })
     .catch((error) => { setError('Hubo un inconveniente en la carga de datos');
                         setCarga(false)
  }); }, []);
//       if (!res.ok) throw new Error("Error al cargar productos");
//       return res.json();
//     })
//     .then(data => {
//       setProductos(Array.isArray(data) ? data : []); // 🔹 guardo en productos
//       setLoading(false);
//     })
//     .catch(err => {
//       console.error("Error al cargar productos:", err);
//       setError(err.message);
//       setLoading(false);
//     });
// }, []);

const [productosFiltrados, setProductosFiltrados] = useState([]);

useEffect(() => {
  const filtrados = productos.filter((p) =>
    p.name?.toLowerCase().includes(busqueda.toLowerCase())
  );
  setProductosFiltrados(filtrados);
}, [productos, busqueda]);

  // const productosFiltrados= productos.filter((producto) => producto?.name?.toLowerCase().includes(busqueda.toLowerCase() ))

  const productosFiltradosAPI= datosAPI.filter((product) => product?.name.toLowerCase().includes(busquedaAPI.toLowerCase() ))
  console.log('prodFiltr' ,productosFiltrados)
  const porCategorias=  productos.filter(p => categoria === "todas" ? true : p.categoria === categoria
);

  const handleAddCart = (product) => {

      if (!isAuth) {
        navigate("/login-delay");
    // navigate("/login");
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
      setCart([]);
      localStorage.removeItem("cart")
       toast.info("Compra finalizada")
  };
      
    return(
    <CartContext.Provider value={{ carga, error, setError,  borrarProducto, vaciarCarrito, setCart, setCargaAPI, cargaAPI, handleAddCart, cart, isCartOpen, setCartOpen, isAuthenticated, setIsAuth, datosAPI, productosFiltrados, productosFiltradosAPI, busqueda, setBusqueda, busquedaAPI, setBusquedaAPI, cantTotal, handleFinalizarCompra, categoria, setCategoria, loading, setLoading}} >
    {children}

    </CartContext.Provider>
 )}