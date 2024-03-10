import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import "./index.css"

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {setProducts(response.data);console.log(response.data)})
        .catch(error => console.error('Error fetching products:', error));
    }, []);
  
    return (
      <div className="productSection">
        <h1>Our Products</h1>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <p className="productTitle">{product.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
 export default ProductsGrid  