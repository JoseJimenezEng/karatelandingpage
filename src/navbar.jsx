import React from 'react';
import "./navbar.css"
import logo from "../public/images/logo.png"
const navbar = () => {
    return (
        <nav className="navbar">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation">
            <div className="text">
              <span>Inicio</span><span>Sobre nosotros</span><span>Inscripciones</span><span>Contacto</span>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default navbar;