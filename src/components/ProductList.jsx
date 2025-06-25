import React, { useContext } from "react";
import Product from "../components/Productos";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);
  const bicicletas = productosFiltrados.filter(p =>
    p.categoria && p.categoria.toLowerCase() === "bicicletas"
  );

  return (
    <>
       <input
        type="text"
        id="input-busqueda"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => {setBusqueda(e.target.value); // Escucha los cambios en el input
        setCurrentPage(1); // Para que busque desde la página 1
        }}
      />
    <div className="container-gallery">
        <h2
          style={{
            color: '#4caf50',
            width: '100%',
            textAlign: 'left',
            margin: '30px 8%',
          }}
        >
          Galería de productos:
        </h2>


        {bicicletas.length > 0 ? (
          bicicletas.map((producto) => (
            <Product key={producto.id} producto={producto} />
          ))
        ) : (
          <p style={{ fontSize: '1.8rem' }}>
            No hay productos que coincidan con la búsqueda.
          </p>
        )}
      </div>
    </>
  );
};

export default ProductList;
