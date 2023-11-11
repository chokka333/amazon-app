
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addToCart } from '../Actions/actionTypes';
import "./ProductDetails.css"
const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
const product = products.find((product) => product.id === parseInt(id));
return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded image-css"
           
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">Price: ${product.price}</p>
          <p>{product.description}</p>
          <p>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          
          <Link to="/" className="btn btn-secondary ml-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
