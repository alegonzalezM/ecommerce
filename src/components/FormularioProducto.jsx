import React , {useState} from 'react'

const FormularioProducto= ({ onAgregar }) => {
   
    const [ producto, setProducto ] = useState({
        name: '',    //no confundir con {name, value}, este es el nombre del prod en el JSON
        price:'',
        description:'', 
        avatar:''
    });
    const [ errores, setErrores ] = useState({ })

    const handleChange = (e) => {   //f q almacena el atributo name y el value
        const {name, value} = e.target;
        setProducto({... producto, [name]: value })
    }
    const handleSubmit = (e) => {
     e.preventDefault()

     onAgregar(producto)
     setProducto({ 
        name:'',
        price: '',
        description: '',
        avatar:''
     })
    }
    return(
        <>
    <div className='container-formularioProd m-3 p-3 text-secondary border border-2'>
   <form onSubmit={handleSubmit} className='form-control ' >
   <h2 id="formularioProd-title">Agregar nuevo producto </h2>
    <div className='m-2 text-start'>
      <label className='tx-form' htmlFor='name'>Nombre: </label>
      <input type='text' className='rounded-1' name='name' id='name' value={producto.name} onChange={handleChange} required />
         {errores.name  && <p className="text-danger">{errores.name }</p> }
    </div>
    <div className='m-2 text-start'>
       <label className='tx-form' htmlFor='price'>Precio:</label>
       <input type='number' className='rounded-1' name='price' id='price' value={producto.price} onChange={handleChange} required min='0' />
          {errores.price  && <p className="text-danger">{errores.price }</p> }
    </div>
    <div className='m-2 text-start'>
        <label className='tx-form' htmlFor='description'>Descripción: </label>
        <input type='text' className='rounded-1' name='description' id='description' maxLength={25} value={producto.description} onChange={handleChange} required />
           {errores.description  && <p className="text-danger">{errores.description}</p> }
     </div>
     <div className='m-2 text-start w-50'> 
  <select className='rounded-1 form-select' name='avatar' value={producto.avatar} onChange={handleChange} required >
    <option value="">Seleccione una categoría</option>
    <option value="Bicicletas">Bicicletas</option>
    <option value="Repuestos">Repuestos</option>
    <option value="Accesorios">Accesorios</option>
    <option value="Usados">Usados</option>
    <option value="Novedades">Novedades</option>
    <option value="Varios">Varios</option>
  </select>
  
   {errores.avatar && <p className="text-danger">{errores.avatar}</p>}
 </div>
   <button type='submit' className='btn-submit-form'>Agregar</button> 
   
   </form>  
   </div>
   <br></br>
           </>
    )

}
export default FormularioProducto;