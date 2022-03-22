import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    const {name, seller, img, price, ratings} = product;

    
    return (
        <div className="product-container">
            <img src={img} alt="" />
            <div className='product-info'>
            <p className="product-name">{name}</p>
            <p>Price: {price}</p>
            <p>Manufacturer: {seller}</p>
            <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='cart-btn' onClick={() => handleAddToCart(product)}>
                <p className='btn-text'>Add to Cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;