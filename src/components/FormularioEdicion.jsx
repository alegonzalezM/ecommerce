import React, {useState, useEffect} from 'react';

function FormularioEdicion({productoSeleccionado, onActualizar}){
    const [producto, setProducto] = useState(productoSeleccionado);
    const handleChange= (e) => {
        const {name, value} = e.target;
        setProducto({...producto, [name]: value});
        return(
    <form>
       <h2>Editar producto</h2>
       <div>
        <label>ID: </label><input type='number' name='id' value={producto.id || ''} onChange={handleChange} readonly/>
        </div>
        <label>Nombre: </label><input type='text' name='nombre' value={producto.name || ''} onChange={handleChange} aria-required/> 
       <div>
        <label>Stock: </label><input type='number' name='stock' value={producto.stock || ''} onChange={handleChange} required />
        </div>
         <div>
        <label>Imagen: </label><input type='text' name='image' value={producto.image || ''} onChange={handleChange} required />
       </div>
        <div>
        <label>Categoría: </label><input type='text' name='categoria' value={producto.categoria || ''} onChange={handleChange} required />
        </div>
        <button type='submit'>Actualizar producto</button>
    </form>
        )
    }}
    export default FormularioEdicion;