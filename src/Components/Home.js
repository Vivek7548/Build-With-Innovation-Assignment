// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home({ token }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, [token]);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [products, searchTerm]);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice)
      )
    );
  }, [products, minPrice, maxPrice]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <p>{product.name} - ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
