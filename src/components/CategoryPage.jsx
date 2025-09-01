import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productos from "../components/Productos";
import { CartContext } from "../context/CartContext";


function CategoryPage() {
  const { productos } = useContext(CartContext);
    const { precios } = useContext(CartContext);
  const { category } = useParams();

  // const productosCat = precios.filter(p =>
  //   p.categoria && p.categoria.toLowerCase() === category.toLowerCase()
  // );
  const productosCat = (precios || []).filter(p =>
  p.categoria && p.categoria.toLowerCase() === category.toLowerCase()
);
  return (
    <>

      <Header />
      <Nav/>
  
      <div className="container-category">
           <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
       
        {productosCat.length > 0 ? (
         
          <div className="file-category"> 
            {productosCat.map((prod) => (
              <div key={prod.id} className="">
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