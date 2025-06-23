// src/components/ListaConAlert.jsx
import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ListaConAlert = () => {
  const elementos = ['Bicicleta de montaña', 'Bicicleta de paseo', 'BMX'];

  const mostrarAlerta = (item) => {
    Swal.fire({
      title: `Detalles`,
      text: `Seleccionaste: ${item}`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <ul>
      {elementos.map((item, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          {item}
          {' '}
          <i
            className="fa-solid fa-circle-info"
            style={{ cursor: 'pointer', color: '#007bff' }}
            onClick={() => mostrarAlerta(item)}
          ></i>
        </li>
      ))}
    </ul>
  );
};

export default ListaConAlert;
