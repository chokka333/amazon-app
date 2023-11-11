import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItems';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length !== 0 ? (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="d-flex justify-content-between align-items-center">
            <p>Total Amount: ${totalAmount}</p>
            <button className='btn btn-danger' onClick={handleClick}>Back to home</button>
          </div>
        </div>
      ) : (
        <div className='align-content-center'>
          <p>Cart Empty</p>
          <button className='btn btn-danger' onClick={handleClick}>Back to home</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
