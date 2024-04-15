import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../styles.css"

import React, { useState, useEffect } from 'react';

const Jewellery=()=> {
    const [products, setProducts] = useState([]);




useEffect(() => {
  
  
  axios.get(`https://fakestoreapi.com/products/category/jewelery`)
    .then(response => {setProducts(response.data);console.log(response.data)})
    .catch(error => console.error('Error fetching products:', error));
}, []);



return (
    <div className="productSection">
    <Navbar/>
    {products.length>0 ? 
   <div className="product-grid">
      {products.map(product => (
        <div key={product.id} >
          <Link className="product-card" to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <p className="productTitle">{product.title}</p>
          </Link>
        </div>
      ))}
    
  </div> : <h1>Loading...</h1>}
  </div>)


};




export default Jewellery