import React, {useState, useEffect} from 'react';


function FormularioEdicion({productoSeleccionado, onActualizar}){
    const [producto, setProducto] = useState(productoSeleccionado);

    useEffect(()=>{                            //escucha cambios en productoSelecc y renderiza
        setProducto(productoSeleccionado)
    }, [productoSeleccionado]
) 

    const handleChange= (e) => {
        const {name, value} = e.target;
        setProducto({...producto, [name]: value});
    };
        return(
    <form className='form-control m-3 p-3 text-secondary border border-2' id='form-edicion' onSubmit={(e)=>{
        e.preventDefault();
        onActualizar(producto)
    }}>
        <div className= 'container-edicion'>
       <h2>Editar producto</h2>
       <div className='m-2 text-start d-flex container-edicion-div'>
        <label htmlFor='id'>ID: </label><input type='number' className='rounded-1' name='id' id='id' value={producto.id || ''} onChange={handleChange} readOnly/> {/*htmlFor reemplaza a for en React*/}
        </div>
        <div className='m-2 text-start d-flex container-edicion-div'>
        <label htmlFor='name'>Nombre: </label><input type='text' className='rounded-1' name='name' id='name' value={producto.name || ''} onChange={handleChange} required/> 
       </div>
       <div className='m-2 text-start d-flex container-edicion-div'>
        <label htmlFor='price'>Precio: </label><input type='number' className='rounded-1' name='price' id='price' value={producto.price || ''} onChange={handleChange} required />
        </div>
         <div className='m-2 text-start d-flex container-edicion-div'>
        <label htmlFor='image'>Imagen: </label><input type='text' className='rounded-1' name='image' id='image' value={producto.image || ''} onChange={handleChange} required />
       </div>
        <div className='m-2 text-start d-flex container-edicion-div' >
        <label htmlFor='avatar'>Categoría: </label><input type='text' className='rounded-1' name='avatar' id='avatar' value={producto.avatar || ''} onChange={handleChange} required />
        </div>
         <div className='m-2 text-start d-flex container-edicion-div' >
        <label htmlFor='description'>Descripción: </label><input type='text' id='description' className='rounded-1' maxLength={55} name='description' value={producto.description || ''} onChange={handleChange} required />
        </div>
        <button type='submit' className='btn-submit-forms'>Actualizar producto</button>
        </div>
    </form>
        )
}
    export default FormularioEdicion;