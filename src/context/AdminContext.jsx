import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const AdminContext= createContext();
export const AdminProvider=({children})=> {
    const [productos, setProductos]= useState([]);
    // const {setAuthenticated} = useContext(CartContext)  // p' cerrar sesion de administrador con boton salir
    const [loading, setLoading]= useState(true);
    const [open, setOpen]= useState(false)
    const [seleccionado, setSeleccionado]= useState(null)
    const [openEditor, setOpenEditor]= useState(false)  //p' abrir formularioEdicion
    const apiURL = "https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles";

     useEffect(() =>{
        // fetch('/data/productos.json')
        fetch( apiURL)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
        .catch((error)=>{
            console.log('Error al recuperar los datos');
            setError(true);
            setLoading(false);
        });
    }, []);

  const cargarProductos = async() =>{
    try{
        const res = await fetch( apiURL)
        const data= await res.json()
        setProductos(data)
    } catch(error) {
        console.log( 'Error al cargar los productos' , error);
    }}

  const agregarProducto= async(producto)=>{
    try{
        // const respuesta= fetch("https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles" , {
        const respuesta= await fetch( apiURL , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
        })
    if(!respuesta.ok ){
            throw new Error('Error al agregar el producto')
        }
        const data= await respuesta.json()
         Swal.fire({
                title:'',
                text:'Producto agregado correctamente',
                icon: 'success',
            })
        cargarProductos()     // --> p' q' refresque cuando agrego un prod
    }catch(error){
        console.log(error.message);
    }}

    const actualizarProducto= async(producto) =>{
        try{ console.log("en el try")
            const res= await fetch( `${apiURL}/${producto.id}` , {
                method :'PUT', 
                headers: { 'Content-Type': 'application/json' },
               
        body: JSON.stringify(producto)
        
        })
            if(!res.ok) throw Error('Error al actualizar')
            const data= await res.json()
            Swal.fire({
                title:'',
                text:'El producto fue actualizado.',
                icon: 'success',
            })
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos() //--> p' q' refresque cuando actualizo un prod
            } 
        catch(error){
            console.log( error.message );
            console.log(localStorage.getItem('role'));  // debería decir "admin"

        }}

const eliminarProducto = async (id) => {
  const confirmar = await Swal.fire({
    title: "¿Estás segura/o?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  });

  if (confirmar.isConfirmed) {
    try {
      const res = await fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) throw Error('Error al eliminar');

      Swal.fire({
        title: '',
        text: 'Producto eliminado correctamente',
        icon: 'success',
      });

      cargarProductos(); // refresca la lista
    } catch (error) {
      console.error('Hubo un problema al eliminar el producto:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo eliminar el producto.',
      });
    }
  }
};
    return(
        <AdminContext.Provider value={{ productos, loading, open, setOpen, openEditor, setOpenEditor, seleccionado, setSeleccionado, agregarProducto , actualizarProducto, eliminarProducto }}>
            {children}
        </AdminContext.Provider>
    )
}
