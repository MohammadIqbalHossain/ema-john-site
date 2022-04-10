import React from 'react';
import './Cart.css';

const Cart = (props) => {
   
    const {cart} = props;
console.log(props.children)

 let total = 0;
 let shipping = 0 ;
 let quantity = 0;
 for(const product of cart){
    //  console.log(product);
     quantity = quantity + product.quantity; 
     total += product.price * product.quantity;
     shipping += product.shipping;
 }
 const tax = total * 0.1;
 const  grandTotal = total + shipping + parseFloat(tax);

//  const reduction = cart.reduce((accumulator, product) => {
//       return (accumulator + product.price);
      
//  }, 0)

    return (
        <div className='cart'>
             <h2>Order Summary</h2>
             <p>Selected items: {quantity}</p>
             
             <p>Total Price: ${total}</p>
             <p>Total shipping: ${shipping}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h4>Grand total: ${grandTotal.toFixed(2)}</h4>
             {props.children}
        </div>
    );
};

export default Cart;