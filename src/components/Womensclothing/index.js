import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../styles.css"

import React, { useState, useEffect } from 'react';

const WomensClothing=()=> {
    const [products, setProducts] = useState([]);




useEffect(() => {
  
  
  axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
    .then(response => {setProducts(response.data);console.log(response.data)})
    .catch(error => console.error('Error fetching products:', error));
}, []);



return (
    <div className="productSection">
    <Navbar/>
   <div className="product-grid">
      {products.map(product => (
        <div key={product.id} >
          <Link className="product-card" to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <p className="productTitle">{product.title}</p>
          </Link>
        </div>
      ))}
    
  </div>
  </div>)


};




export default WomensClothing