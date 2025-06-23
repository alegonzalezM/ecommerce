import React, { useContext, useState } from "react";
import MuestraAPI from "../components/MuestraAPI";
import Pagination from 'react-bootstrap/Pagination';
import { CartContext } from '../context/CartContext';

const MuestraAPIList = () => {
  const { productosFiltradosAPI, busquedaAPI, setBusquedaAPI } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;
  const indexOfLast = currentPage * itemPerPage;
  const indexOfFirst = indexOfLast - itemPerPage;
  const currentItems = productosFiltradosAPI.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(productosFiltradosAPI.length / itemPerPage);

  return (  
     <>
      <input  type="text"
        id="input-busqueda-API"
        placeholder="Buscar producto en la API..."
        value={busquedaAPI}
        onChange={(e) => {
          setBusquedaAPI(e.target.value);
          setCurrentPage(1); // Para que busque desde la página 1
        }}
      />
     <div className="container-gallery">
        <h2 style={{ color: '#4caf50', width: '100%', textAlign: 'left', margin: '30px 8%' }}>
          Novedades:
        </h2>

        <div className="card-news-container" style={{  }}>
          {currentItems.length > 0 ? (
            currentItems.map((dato) => (
              <MuestraAPI key={dato.id} dato={dato} />
            ))
          ) : (
            <p style={{ fontSize: '1.8rem'}}>
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
      </div>
      </>
  );
};

export default MuestraAPIList;
