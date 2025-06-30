import React from 'react';
import { useState } from 'react';

const SubMenu = ({ id, titulo, children }) => {
  const [menuActivo, setMenuActivo] = useState(null);

  const toggleSubmenu = (id) => {
    if (window.innerWidth <= 575.98) {
      setMenuActivo((prev) => (prev === id ? null : id));
    }
  };

  return (
    <div className="submenu">
      <li className="submenu-header" onClick={() => toggleSubmenu(id)}>
        {titulo}
        <span className="plus-sign">{menuActivo === id ? '−' : '+'}</span>
      </li>
      <ul className={`sublista ${menuActivo === id ? 'visible' : ''}`}>
        {children}
      </ul>
    </div>
  );
};


export default SubMenu;
