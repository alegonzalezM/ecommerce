import React, {useState , useEffect, useContext, useRef } from 'react'
import FormularioProducto from '../components/FormularioProducto'
import FormularioEdicion from '../components/FormularioEdicion';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { useAuth } from '../context/AuthContext';

const Admin= () => {
    // const {setIsAuth} = useContext(CartContext); 
    const {productos, loading, open, setOpen, openEditor, setOpenEditor, seleccionado, setSeleccionado, agregarProducto , actualizarProducto, eliminarProducto} = useContext(AdminContext) //todo lo q está en el provider de AdminContext

    const navigate = useNavigate()
    const editFormRef = useRef(null); // referencia al formulario de edición
    const agregarRef = useRef();
    const { logout } = useAuth();


  useEffect(() => { 
    if (openEditor && editFormRef.current) {
      editFormRef.current.scrollIntoView({ behavior: 'smooth' }); //  scroll automático
    }
  }, [openEditor]);

    const cerrarSesionAdmin= () => {
        setIsAuth(false);                      // cambia el estado global
        sessionStorage.removeItem('isAuthenticated');   // limpia storage
        sessionStorage.removeItem('role');
        navigate('/login');   
                 
    }
    return(
        <div className='container-admin d-flex'>
        {loading ? (<p>Cargando...</p>) : (<><nav>
            <ul className='nav nav-admin'>
                <li className='nav-item'>
                   <button className='navBtn'  onClick={logout}>
                          
    <i className='fa-solid fa-right-from-bracket'></i>
                    </button>  
                </li>
                  <li className='nav-item'>
                <button className="navBtnAgregar" onClick={() => agregarRef.current?.scrollIntoView({ behavior: 'smooth' })}
  >              Agregar producto </button>
                </li>
                  <li className='nav-item'>Admin</li>
            </ul>
            </nav>
        <h1 className='title-admin'>Panel administrativo</h1>  
        <ul className='list d-flex' id='list-admin' style={{justifyContent:'center', padding:'.5rem'}}>
               { productos.map((product) => (
                  <li key={product.id} className='listItem'>
                    <div className= 'listItemImage'><img src={product.image}  alt={product.name} style={{ margin:'auto', width:'5em' }}/></div>
                    <div className="col ">{product.name} </div>
       <div className="col col-card-price m-1">${product.price} </div>
       <div className="col col-card-avatar m-1" style={{  }}><u>Categoría:</u> {product.avatar} </div>
       <div className="col col-card-description m-1">{product.description} </div>
       <div><button className='editButton btn btn-secondary btn-sm m-2' onClick={()=>{
                            setOpenEditor(true)
                            setSeleccionado(product)
                            setTimeout(() => {
      editFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); }}>Editar</button> 
                        <button className='deleteButton btn btn-secondary btn-sm m-2' onClick={()=> eliminarProducto(product.id)}>Eliminar</button>
                        </div>
                        </li>

              ))}
              </ul>
              </>
                )}


          
       <button ref={agregarRef} className='btn-agregar float-start m-3 border border-3' onClick={() => setOpen(true)}>
       Agregar producto </button>   {/* ref={agregarRef} es el ancla desde boton agregar producto */}
     
        {open && (<FormularioProducto onAgregar={agregarProducto}/>)}
        {openEditor && (  <div ref={editFormRef}><FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto}/></div>)}  
      
        </div>   
    );
}

export default Admin;