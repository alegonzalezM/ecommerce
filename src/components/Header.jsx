import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/urban-bikes-t.png";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import WhatsApp from "./WhatsAppWidget";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const url = "https://wa.me/541133333333";
    const width = window.innerWidth * 0.5;
    const height = window.innerHeight * 0.8;
    const specs = `width=${width},height=${height},resizable=yes,scrollbars=yes`;
    window.open(url, "whatsappWindow", specs);
  };

  return (
    <header>
      <div className="container-header">
        <div className="col-3">
          <p className="">
            💬 ¿Tenés dudas? ¡Estamos para ayudarte!
            <br />
            <i className="fa-solid fa-phone icono"></i> Tel:011 3333333
          </p>

           {/* <a href="https://wa.me/541133333333" target="_self" rel="noopener noreferrer" > */}
     <div className="whatsapp-container">
  <FaWhatsapp color="rgb(90, 181, 7)" fontSize="1.3rem" />
 <a href="https://wa.me/541133333333" onClick={handleClick} target='_blank' className="whatsapp-link" rel="noopener noreferrer" >
    Escribinos por WhatsApp
    <br />
    011 3333-3333
  </a>
  <WhatsApp />
</div>

        </div>

        <div className="col-6" id="#logo">
          <img style={{ width: "11%", paddingLeft: "5px" }} src={logo} />
          <h1 className="header-title">
            <NavLink to="/" className="link">
              URBAN
              <br />
              BIKES
            </NavLink>
          </h1>
        </div>
        <div className="col-3">
               <p className="col-3-text">
            <FaMapMarkerAlt color="rgb(90, 181, 7)" />
  <a href="/contacto#mapa"
    style={{ marginLeft: "5px", textDecoration: "none", color: "inherit" }}
  >
    Av Córdoba 2023 - CABA - Bs As - Argentina
  </a>
</p>
             <p className="col-3-text">
              <a href="mailto:urbanbikes@gmail.com">
            <i className="fa-regular fa-envelope icono"></i>urbanbikes@gmail.com</a>
          </p>
        </div>
      </div>
    </header>

    
  );
};
export default Header;
