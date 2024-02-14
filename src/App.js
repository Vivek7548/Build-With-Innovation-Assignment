/* eslint-disable no-unused-vars */
// src/App.js
import React, { useState } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  const [token, setToken] = useState('');
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Cart cartItems={cartItems} />
          <Home token={token} />
        </>
      )}
    </div>
  );
}

export default App;
