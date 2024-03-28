// Install Axios if you haven't already: npm install axios

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProductsGrid from './components/ProductsGrid';
import Home from './components/Home';
import Login from './components/Login'


const App = () => (
  <BrowserRouter>
    
     
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/" element={<Home />} />
      </Routes>
    
  </BrowserRouter>
);

export default App;
