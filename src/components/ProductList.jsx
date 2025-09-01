// import React, { useContext } from "react";
// import Product from "../components/Productos";
// import { CartContext } from "../context/CartContext";

// const ProductList = () => {
//   const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);
//   const bicicletas = productosFiltrados.filter(p =>
//      p.categoria && p.categoria.toLowerCase().startsWith("bicicletas-")
//   );

//   return (
//     <>
//        <input
//         type="text"
//         id="input-busqueda"
//         placeholder="Buscar producto..."
//         value={busqueda}
//         onChange={(e) => {setBusqueda(e.target.value); // Escucha los cambios en el input
//         setCurrentPage(1); // Para que busque desde la página 1
//         }}
//       />
//     <div className="container-gallery">
//         <h2
//           style={{
//             color: '#4caf50',
//             width: '100%',
//             textAlign: 'left',
//             margin: '30px 8%',
//           }}
//         >
//           Galería de productos:
//         </h2>


//         {bicicletas.length > 0 ? (
          
//           bicicletas.map((producto) => (
//             <Product key={producto.id} producto={producto} />
            
//           ))
//         ) : (
          
//           <p style={{ fontSize: '1.8rem' }}>
            
//             No hay productos que coincidan con la búsqueda.
//           </p>
          
//         )
//         }
        
//       </div>
//     </>
//   );
// };

// export default ProductList;

import React, { useContext, useState } from "react";
import Product from "../components/Productos";
import { CartContext } from "../context/CartContext";
import loadingGif from "../assets/loading.gif";
import Pagination from 'react-bootstrap/Pagination';

const ProductList = () => {
  const { productosFiltrados, busqueda, setBusqueda, cargaAPI, error } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 15;
  const indexOfLast = currentPage * itemPerPage;
  const indexOfFirst = indexOfLast - itemPerPage;


  const bicicletasFiltradas = productosFiltrados.filter(p => p.category?.toLowerCase().startsWith("bicicletas")).sort((a, b) => {
      // Primero por marca (si existe)
      // const marcaA = a.brand?.toLowerCase() || "";
      // const marcaB = b.brand?.toLowerCase() || "";
      // if (marcaA < marcaB) return -1;
      // if (marcaA > marcaB) return 1;

      // Si la marca es igual, ordenar por nombre
      const codA = a.codigo?.toLowerCase() || "";
      const codB = b.codigo?.toLowerCase() || "";
      return codA.localeCompare(codB);
    });

  const currentItems = bicicletasFiltradas.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(bicicletasFiltradas.length / itemPerPage);

  if (cargaAPI) return <img src={loadingGif} alt="Cargando..." />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <input
        type="text"
        id="input-busqueda"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="container-gallery">
        <h2 style={{ color: '#4caf50', width: '100%', textAlign: 'left', margin: '30px 8%' }}>
          Galería de productos:
        </h2>

        {currentItems.length > 0 ? (
          currentItems.map(producto => <Product key={producto.id} producto={producto} />)
        ) : (
          <p style={{ fontSize: '1.8rem' }}>
            No hay productos que coincidan con la búsqueda.
          </p>
        )}
      </div>

      {currentItems.length > 0 && (
          <Pagination>
            <Pagination.Prev
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}

    </>
  );
};

export default ProductList;


// import React, { useState, useEffect, useContext } from "react";
// import Product from "../components/Productos";
// import { CartContext } from "../context/CartContext";
// import loadingGif from "../assets/loading.gif";

// const ProductList = () => {
//   const { busqueda, setBusqueda, loading, setLoading } = useContext(CartContext);
//   const [productos, setProductos] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const bicicletas = productos.filter(
//     p => p.categoria && p.categoria.toLowerCase().startsWith("bicicletas-")
//   );

//   if (loading) return <img src={loadingGif} alt="Cargando..." />;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <input
//         type="text"
//         id="input-busqueda"
//         placeholder="Buscar producto..."
//         value={busqueda}
//         onChange={(e) => { setBusqueda(e.target.value); /* setCurrentPage(1) si lo quieres mantener */ }}
//       />

//       <div className="container-gallery">
//         <h2 style={{ color: '#4caf50', width: '100%', textAlign: 'left', margin: '30px 8%' }}>
//           Galería de productos:
//         </h2>

//         {bicicletas.length > 0 ? (
//           bicicletas.map(producto => <Product key={producto.id} producto={producto} />)
//         ) : (
//           <p style={{ fontSize: '1.8rem' }}>
//             No hay productos que coincidan con la búsqueda.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductList;

