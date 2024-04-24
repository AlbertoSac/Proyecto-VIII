import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Navegar</h3>
            <ul>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/products">Productos</Link></li>
            </ul>
          </div>
          <div className="col text-right">
            <div className="footer-address">
              <h3>Dirección</h3>
              <p>Calle #123</p>
              <p>Colonia</p>
              <p>Ciudad, Estado</p>
              <p>Código Postal: 12345</p>
              <p>México</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
