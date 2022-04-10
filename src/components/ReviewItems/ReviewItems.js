import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    console.log(props);
    const {product, handleRemoveItem} = props;
    const { name, img, quantity, price, shipping } = product;
    return (
        <div className='review-container'>
            <img src={img} alt="" />
            <div className="container-info" title={name}>
                <div>
                    <h1>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h1>
                    <p>{shipping}</p>
                    <p><small>${price}</small></p>
                    <p><small>{quantity}</small></p>
                </div>
                <div>
                    <button onClick={() => handleRemoveItem(product)} className='trash-btn'>
                         <FontAwesomeIcon className='trash-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItems;