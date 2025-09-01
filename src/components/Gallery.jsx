// import { useEffect, useState } from "react";

// const Gallery = () => {
//     // const [productos, setProductos] = useState([]);
//     const [precios, setPrecios] = useState([]);
  
//     useEffect(() => {
//       fetch("http://localhost:3006/api/productos")   //cambie de productos
//         .then(res => res.json())
//         .then(data => setPrecios(data));
 
//     }, []);

//   const estiloImagen= {width:'30%', margin:'10px' };

//    return(
  
//     <div id='container-gallery'>
//     {precios.map((producto, index) => (  //cambia
//       <div id='container-bike' key={index}>   
//         {/* <img src={producto.imagen} alt={producto.name} style={estiloImagen} /> */}
//         <div id='container-titulo'><h3>{producto.name}</h3></div>
       
//       </div>
//     ))}
   
//    <section className='galeria'>
//      {images.map((src, index) => (
//           <img style={estiloImagen}  key={index} src={src} alt={`Imagen ${index + 1}`} />
//      ))}

//     </section>
//     </div>
// );
// };
//   export default Gallery

import { useEffect, useState } from "react";

const Gallery = () => {
  const [precios, setPrecios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/api/articulos")
      .then(res => res.json())
      .then(data => setPrecios(data))
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  const estiloImagen = { width: "30%", margin: "10px" };

  return (
    <div id="container-gallery">
      {precios.length > 0 ? (
        precios.map((producto, index) => (
          <div id="container-bike" key={index}>
            <img src={producto.image} alt={producto.name} style={estiloImagen} />
            <div id="container-titulo">
              <h3>{producto.name}</h3>
                       <h3>{producto.description}</h3>
                            <h3>{producto.stock}</h3>
            </div>
            <div>Precio: ${producto.price}</div>
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default Gallery;
