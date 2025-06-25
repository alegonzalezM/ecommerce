import React, { useState, useEffect } from "react";
import loadingGif from "../assets/loading.gif";
import ProductList from "./ProductList";
import Login from "../layouts/Login";

function PaginaConDelay() {
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarga(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {carga
        ? <>
        <img src={loadingGif} alt="loading" />
        <p style={{color:'rgb(90, 181, 7)', fontSize:'large'}}>Redirigiendo al login</p>
        </>
        : <Login />
      }
    </>
  );
}
export default PaginaConDelay;