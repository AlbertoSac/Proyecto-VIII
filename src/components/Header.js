import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pet-store.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Margen a la izquierda del logo */}
      <Link className="navbar-brand ms-3" to="/"><img src={logo} alt="Pet Store" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/products">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faq">FAQ</Link>
          </li>
        </ul>
        <form className="form-inline ms-auto mr-5">
        </form>
        {/* Margen a la derecha de los elementos del lado derecho */}
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Ingresar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Registrarse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
