import React from 'react';
import "./footer.css"
import wpp from "../public/images/wpp.jpg"
import fc from "../public/images/fc.jpg"
import ins from "../public/images/ins.jpg"

const footer = () => {
    return (
        <footer className='footer'>
        <div className="content">
          <div className="left">
            <p>Dirección: Cll 123# 23A - Cr2</p>
            <p>Teléfono: 344584521 - 4225658</p>
            <p>Correo: karatesmr@gmail.com</p>
          </div>
          <div className="right">
            <div className="contentRight">
            <img src={wpp} alt="" /><img src={ins} alt="" /><img src={fc} alt="" />
            </div>
          </div>
        </div>
      </footer>
    );
};

export default footer;