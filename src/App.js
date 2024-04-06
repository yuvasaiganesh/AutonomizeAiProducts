import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserDetailsProvider } from './Context'; 
import ProductDetails from './components/ProductDetails';
import Electronics from './components/Electronics';
import MensClothing from './components/Mensclothing';
import WomensClothing from './components/Womensclothing';
import Jewellery from './components/Jewellery';
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
        <Route path="/mensClothing" element={<MensClothing />} />
        <Route path="/womensClothing" element={<WomensClothing />} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/jewellerry" element={<Jewellery />} />
         <Route path="/" element={<Home />} />
      </Routes>
    </UserDetailsProvider>
  </BrowserRouter>
);

export default App;
