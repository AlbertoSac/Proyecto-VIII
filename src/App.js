import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductList from './components/productList'; // Asegúrate de importar correctamente ProductList
import ProductDetail from './components/productDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} /> {/* Agrega esta ruta */}
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
