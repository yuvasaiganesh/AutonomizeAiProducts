import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserDetailsProvider } from './Context'; 
import ProductDetails from './components/ProductDetails';
import ProductsGrid from './components/ProductsGrid';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';

const App = () => (
  <BrowserRouter>
    <UserDetailsProvider> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsGrid />} />
         <Route path="/" element={<Home />} />
      </Routes>
    </UserDetailsProvider>
  </BrowserRouter>
);

export default App;
