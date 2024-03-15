import React from 'react';
import { Link } from 'react-router-dom';
import coquetaImage from '../assets/coqueta.jpeg'; // Importa la imagen aquí

const Home = () => {
  return (
    <div className="hero-banner">
      <div className="container text-center"> {/* Centramos el contenido */}
        <h1>¡Bienvenido a nuestra tienda de mascotas!</h1>
        <p>Descubre nuestra increíble selección de productos para tus mascotas.</p>
        <Link to="/products" className="btn btn-primary">Ver productos</Link>
      </div>
      <div className="banner row justify-content-center"> {/* Centramos el banner */}
        <div className="col-md-6 align-self-center text-center"> {/* Centramos verticalmente y horizontalmente el contenido */}
          <img src={coquetaImage} alt="Producto destacado" style={{ maxWidth: '500px' }} />
          <div className="banner-content">
            <h3>Producto destacado</h3>
            <p>¡Este increíble producto es perfecto para tu mascota!</p>
            <Link to="/products" className="btn btn-primary">Ver producto</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
