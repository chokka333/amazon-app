import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure } from '../Actions/actionTypes';

const Header = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
 const [searchTerm, setSearchTerm] = useState('');
 const handleSearch = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${searchTerm}`);
            const data = await response.json();
            dispatch(fetchProductsSuccess(data));

        } catch (error) {
            dispatch(fetchProductsFailure(error.message));
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    if (searchTerm == "") {
        dispatch(fetchProducts());
    }

    return (
        <div className="d-flex justify-content-between align-items-center p-3">
            <h1>Amazon App</h1>
            <div className="d-flex" >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className="btn btn-outline-secondary" type="button" id="search-addon" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <Link to="/cart"><button className='btn btn-danger'>Cart ({totalQuantity})</button></Link>
        </div>
    );
};

export default Header;
