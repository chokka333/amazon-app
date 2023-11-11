
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../Actions/actionTypes';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} alt={item.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Price: ${item.price}</p>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <button className="btn btn-secondary" onClick={handleDecreaseQuantity}>
                -
              </button>
              <span className="font-weight-bold">{item.quantity}</span>
              <button className="btn btn-secondary" onClick={handleIncreaseQuantity}>
                +
              </button>
            </div>
            <button className="btn btn-danger" onClick={handleRemoveFromCart}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
