import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data); // Set the products state with the fetched data
    } catch (error) {
      console.error('Error fetching products:', error.response.data); // Handle error response
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {products.map(product => (
            <div key={product.id}>
                 <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
            </div>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
