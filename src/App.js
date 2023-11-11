import React from "react";
import UnauthorizedErr from "../src/components/error"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/common/header'
import Footer from '../src/common/footer'
import Home from '../src/components/Home'
import ProductDetails from '../src/components/ProductDetails';
import Cart from "../src/components/cart/cart"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/product/:id" element={<ProductDetails />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>

          <Route path='*' element={<UnauthorizedErr />} />
        </Routes>

        <Footer />
      </Router>

    </>
  );
};



export default App;