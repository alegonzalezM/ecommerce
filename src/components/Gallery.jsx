import React from "react";
import { useEffect, useState } from "react";

const Gallery = () => {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      fetch('/productos.json')
        .then(res => res.json())
        .then(data => setProductos(data));
    }, []);

  const estiloImagen= {width:'30%', margin:'10px' };

   return(
  
    <div id='container-gallery'>
    {productos.map((producto, index) => (
      <div id='container-bike' key={index}>
   
        <img src={producto.imagen} alt={producto.nombre} style={estiloImagen} />
        <div id='container-titulo'><h3>{producto.nombre}</h3></div>
       
      </div>
    ))}
   
   <section className='galeria'>
     {images.map((src, index) => (
          <img style={estiloImagen}  key={index} src={src} alt={`Imagen ${index + 1}`} />
     ))}

    // </section>
    </div>
);
};
  export default Gallery