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
      <h2>Productos Disponibles</h2>
    </div>
  );
};

export default ProductList;
