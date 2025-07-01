import React from 'react';

const SubMenu = ({ id, titulo, children, menuActivo, toggleSubmenu }) => {
  const isActivo = menuActivo === id;

  return (
    <li className="submenu">
      <div className="submenu-header" onClick={() => toggleSubmenu(id)}>
        {titulo}
        <span className="plus-sign">{isActivo ? '−' : '+'}</span>
      </div>
      <ul className={`sublista ${isActivo ? 'visible' : ''}`}>
        {children}
      </ul>
    </li>
  );
};

export default SubMenu;

