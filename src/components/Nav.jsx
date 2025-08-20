import React, { useState, useContext } from "react";
import "./../styles/styles.css";
import Cart from '../components/Cart';
import { NavLink } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { useAuth } from "../context/AuthContext";
import SubMenu from '../components/Submenu';

const Nav = () => {
  const { isCartOpen, setCartOpen, vaciarCarrito, cantTotal } = useContext(CartContext);
  const { logout } = useAuth();
  const [menuActivo, setMenuActivo] = useState(null);

  const toggleSubmenu = (id) => {
    if (window.innerWidth <= 575.98) {
      setMenuActivo(prev => (prev === id ? null : id));
    }
  };

  return (
    <nav className="nav">
      <ul style={{ marginBottom: '3px' }}>
        <SubMenu id="bicicletas" titulo="Bicicletas" menuActivo={menuActivo} toggleSubmenu={toggleSubmenu}>
          <li><NavLink to="/categoria/bicicletas-MTB">MTB</NavLink></li>
          <li><NavLink to="/categoria/bicicletas-infantiles">Infantiles</NavLink></li>
          <li>Urbanas</li>
          <li>Eléctricas</li>
        </SubMenu>

        <SubMenu id="repuestos" titulo="Repuestos" menuActivo={menuActivo} toggleSubmenu={toggleSubmenu}>
          <li><NavLink to="/categoria/cadenas" className='navlink'>Cadenas</NavLink></li>
          <li><NavLink to="/categoria/cambios" className='navlink'>Cambios</NavLink></li>
          <li>Frenos</li>
          <li>Horquillas</li>
          <li>Manijas</li>
          <li>Pedales</li>
        </SubMenu>

        <SubMenu id="accesorios" titulo="Accesorios" menuActivo={menuActivo} toggleSubmenu={toggleSubmenu}>
          <li><NavLink to="/categoria/cascos">Cascos</NavLink></li>
          <li><NavLink to="/categoria/luces">Luces</NavLink></li>
          <li><NavLink to="/categoria/herramientas">Herramientas</NavLink></li>
        </SubMenu>

        <li><NavLink to='/' className="link">Inicio</NavLink></li>
        <li><NavLink to='/acercade' className="link">Acerca de</NavLink></li>
        <li><NavLink to='/contacto' className="link">Contacto</NavLink></li>
        <li><NavLink to='/login' className="link">Login</NavLink></li>
        <li><NavLink to='/login'><i className="fa-solid fa-user-tie"></i></NavLink></li>

        <li><button className="btn-show-cart" onClick={() => setCartOpen(true)}>
          Ver carrito <i className="fa-solid fa-cart-shopping mx-1"></i>
          {cantTotal > 0 && (<span className="badge">{cantTotal}</span>)}
        </button></li>
        <Cart
          isOpen={isCartOpen}
          vaciarCarrito={vaciarCarrito}
          onClose={() => setCartOpen(false)}
        />
      </ul>
    </nav>
  );
};

export default Nav;
