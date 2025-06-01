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
    <div className='container-formularioProd '>
   <form onSubmit={handleSubmit} className='form-control m-3 p-3 text-secondary border border-2'>
   <h2>Agregar nuevo producto </h2>
    <div className='m-2 text-start'>
      <label className='tx-form'>Nombre: </label>
      <input type='text' className='rounded-1' name='name' value={producto.name} onChange={handleChange} required />
         {errores.name  && <p className="text-danger">{errores.name }</p> }
    </div>
    <div className='m-2 text-start'>
       <label className='tx-form'>Precio:</label>
       <input type='number' className='rounded-1' name='price' value={producto.price} onChange={handleChange} required min='0' />
          {errores.price  && <p className="text-danger">{errores.price }</p> }
    </div>
    <div className='m-2 text-start'>
        <label className='tx-form '>Descripción: </label>
        <input type='text' className='rounded-1' name='description' value={producto.description} onChange={handleChange} required />
           {errores.description  && <p className="text-danger">{errores.description}</p> }
     </div>
     <div className='m-2 text-start'>
        <label className='tx-form'>Categoría: </label>
        <input type='text' className='rounded-1' name='avatar' value={producto.avatar} onChange={handleChange} required />
           {errores.avatar  && <p className="text-danger">{errores.avatar}</p> }
     </div>

   <button type='submit' className='text-end pe-5 border border-1' >Agregar</button> 
   
   </form>  
   </div>
   <br></br>
           </>
    )

}
export default FormularioProducto;