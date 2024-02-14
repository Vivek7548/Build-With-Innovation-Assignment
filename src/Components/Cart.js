// src/components/Cart.js
import React from 'react';

function Cart({ cartItems }) {
  const totalAmount = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <p>Cart Count: {cartItems.length}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
}

export default Cart;
