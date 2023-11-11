
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

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length!==0?( cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))):(<div className='align-content-center'><p>Cart Empty</p></div>)}
      <div className="d-flex justify-content-end align-items-end">
    <button className='btn btn-danger' onClick={handleClick}>Back to home</button>
</div>
     
    </div>
  );
};

export default Cart;
