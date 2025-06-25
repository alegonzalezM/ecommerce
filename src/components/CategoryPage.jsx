import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/Productos";
import { CartContext } from "../context/CartContext";


function CategoryPage() {
  const { productos } = useContext(CartContext);
  const { category } = useParams();

  const productosCat = productos.filter(p =>
    p.categoria && p.categoria.toLowerCase() === category.toLowerCase()
  );
  return (
    <>

      <Header />
      <Nav/>
  
      <div className="container-category">
           <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
       
        {productosCat.length > 0 ? (
         
          <div className="row"> 
            {productosCat.map((prod) => (
              <div key={prod.id} className="col-md-4 mb-3">
              <Productos producto={prod} />
              </div>
              
            ))}
          </div>
        ) : (   
          <p>No hay productos en la categoría {category}.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
export default CategoryPage