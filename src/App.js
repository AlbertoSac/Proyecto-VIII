import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import ProductList from './components/productList.js'; // Asegúrate de importar correctamente ProductList
import ProductDetail from './components/productDetail.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} /> 
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <ProductList />

        <Footer />
      </div>
    </Router>
  );
}


export default App;
