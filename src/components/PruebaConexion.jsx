import { useEffect, useState } from "react";

function PruebaConexion() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/api/articulos") // llama al backend
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* <h2>Prueba de API</h2>
      {productos.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>${p.price}</p>
        </div>
      ))} */}
    </div>
  );
}

export default PruebaConexion;
