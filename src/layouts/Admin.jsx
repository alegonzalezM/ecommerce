import React, {useState , useEffect} from 'react'
import FormularioProducto from '../components/FormularioProducto'
import FormularioEdicion from '../components/FormularioEdicion';

// import ProductList from '../components/ProductList'
// import loading from '../assets/loading.gif'
// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';


const Admin= () => {
    const [productos, setProductos]= useState([]);
    const [form, setForm]= useState({
        name: '',    
        price:'',
        image:'',
        description:'', 
        avatar:''
    });
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
        alert('Producto agregado correctamente')
        cargarProductos()     // --> p' q' refresque cuando agrego un prod
    }catch(error){
        console.log(error.message);
    }}

    const actualizarProducto= async(producto) =>{
        try{
            const res= await fetch( `{apiURL}/${producto.id}` , {
                method :'PUT', 
                headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
        })
            if(!res.ok) throw Error('Error al actualizar')
            const data= await res.jason()
            alert('Producto actualizado correctamente')
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos() //--> p' q' refresque cuando actualizo un prod
            } 
        catch(error){
            console.log( error.message );
        }}

    const eliminarProducto= async(id) =>{
        const confirmar= window.confirm('Estas seguro de eliminar el producto?')
        if (confirmar){
            try{
                const res= await fetch( `https://6814cc8c225ff1af162a23f1.mockapi.io/bicycles/${id}` , {
                    method :'DELETE', 
                })
                if(!res.ok) throw Error('Error al eliminar')
                    alert('Producto eliminado correctamente')
                cargarProductos() //--> p' q' refresque cuando elimino un prod>
            } catch(error){
                alert('Hubo un problema en la eliminación del producto')
            }
        }}
    return(
        <div className='container'>
        {loading ? (<p>Cargando...</p>) : (<><nav>
            <ul className='nav'>
                <li className='nav-item'>
                    <button className='navBtn'>
                        <i className='fa-solid fa-right-from-bracket'></i>
                  <li className='nav-item'><a href='/admin' >Admin</a></li>
                    </button>
                </li>
            </ul>
            </nav>
        <h1 className='title'>Panel administrativo</h1>  
        <ul className='list d-flex'>
               { productos.map((product) => (
                    <li key={product.id} className='listItem'>
                        <div className= 'listItemImage'><img src={product.image}  alt={product.name} style={{ margin:'auto', width:'5em' }}/></div>
                       <div className="col ">{product.name} </div>
      <div className="col col-card-price m-1">${product.price} </div>
      <div className="col col-card-stock m-1" style={{ margin:'auto', width:'6em' }}>Categoría: {product.avatar} </div>
                        <div>
                        <button className='editButton btn btn-secondary btn-sm m-2'>Editar</button>
                        <button className='deleteButton btn btn-secondary btn-sm m-2' onClick={()=> eliminarProducto(product.id)}>Eliminar</button>
                        </div>
                        </li>

              ))}
              </ul></>
                   
                )}
        <button className='btn-agregar float-start m-2 border border-3' onClick={( ) => setOpen(true)}>Agregar producto </button>
        {open && (<FormularioProducto onAgregar={agregarProducto}/>)}
        {open && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto}/>)}
        </div>
    );
}

export default Admin;