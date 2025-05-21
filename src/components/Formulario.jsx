import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState(" ");
 
  function manejarEnvio(evento) {
    evento.preventDefault();
  }
  return (
    <form className='form-control' onSubmit={manejarEnvio}>
      <input className="form-input form-control-sm bg-success-subtle"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <button type="submit" className="btn bg-success-subtle ms-2 btn-enviar">Enviar</button>
    </form>
  );
}
