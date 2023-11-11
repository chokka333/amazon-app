
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Actions/actionTypes';
import ProductList from './ProductList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
 return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
