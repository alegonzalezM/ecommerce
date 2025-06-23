import { useState } from "react";

export default function Formulario() {
 
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });
  const manejarCambio = (e) => {
    const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };
  return (
 
    <form className='form-control ' id='form-contacto' onSubmit={manejarEnvio}>
     <label>Nombre: </label> <input className="form-input form-control-sm bg-success-subtle"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={manejarCambio}
          placeholder="Nombre"
      />
      <label>Apellido: </label> <input className="form-input form-control-sm bg-success-subtle"
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={manejarCambio}
        placeholder="Apellido"
      />
       <label>Email: </label> <input className="form-input form-control-sm bg-success-subtle w-75"
     type="email"
     name="email"
     value={formData.email}
     onChange={manejarCambio}
     placeholder="Email"
      />
       <label>Tel: </label> <input className="form-input form-control-sm bg-success-subtle w-50"
         type="tel"
         name="telefono"
         value={formData.telefono}
         onChange={manejarCambio}
         placeholder="Teléfono"
      />
      <button type="submit" id='btn-enviar' className="btn bg-success-subtle mt-4 mb-5  w-25">Enviar</button>
    </form>

  );
}
