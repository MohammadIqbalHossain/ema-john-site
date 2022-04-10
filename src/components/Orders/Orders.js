import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCards from '../../Hooks/useCards';
import useProducts from '../../Hooks/useProducts';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cards, setCards] = useCards(products);

    const handleRemoveItem = product => {
        const rest = cards.filter(pd => pd.id !== product.id);
        setCards(rest); 
        removeFromDb(product.id)
    }

  let navigate = useNavigate();

    return (
        <div className='container'>
            <div className="">
                {
                    cards.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                        >
                          
                        </ReviewItems>)
                        
                }
            </div>
            <div className="cart-container">
                <Cart cart={cards}>
                
                        <button onClick={() => navigate('/shipment')} >Proceed shipping</button>
                  
                </Cart>
            </div>
        </div>
    );
};

export default Orders;