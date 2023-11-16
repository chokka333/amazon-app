import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Actions/actionTypes";
import "./product.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.id));
  };

  const isProductInCart = cart.some((item) => item.id === product.id);
  const productQuantityInCart = isProductInCart
    ? cart.find((item) => item.id === product.id).quantity
    : 0;

 
  const titleTrim = (title, maxLength) => {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
      <div className="card">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top product-image"
            alt={product.title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{titleTrim(product.title, 20)}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          {isProductInCart && (
            <div className="d-flex justify-content-between align-items-center mb-2">
              <button
                className="btn btn-secondary"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span className="font-weight-bold">{productQuantityInCart}</span>
              <button
                className="btn btn-secondary"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
          )}
          <button
            className="btn btn-primary"
            onClick={isProductInCart ? handleIncreaseQuantity : handleAddToCart}
          >
            {isProductInCart ? "Add More" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
