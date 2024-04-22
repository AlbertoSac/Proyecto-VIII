import React, { useState, useEffect } from 'react';
import axios from 'axios';
import coquetaImage from '../assets/coqueta.jpeg'; // Importa la imagen

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/productos/');
        setProductList(response.data.productos);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {productList.map(product => (
          <div key={product.id} className="product-banner" style={{ width: '350px', margin: '10px' }}>
            <img src={coquetaImage} alt={product.nombre} style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="product-details">
              <h3>{product.nombre}</h3>
              <p>Precio: ${product.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
