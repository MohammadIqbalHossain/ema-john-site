import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStroedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
   
   

    // useEffect(() => {
    //     const getProduct = getStroedCart();
    //     // console.log(getProduct);
    //     const savedCart = [];
    //     for(const product in getProduct){
    //         const addedProducts = products.find(item => product === item.id)
    //         if(addedProducts){
    //             const quantity = getProduct[product];
    //             addedProducts.quantity = quantity;
    //             savedCart.push(addedProducts);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products])


    useEffect(() => {
        const stroedItems = getStroedCart();
        const savedCart = []
        for(const id in stroedItems){
            const addedCart = products.find(product => id === product.id);
            if(addedCart){
                const quantity = stroedItems[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
            }
        }
        setCart(savedCart);
    }, [products]);



    const handleAddToCart = (selectedProducts) => {
        // console.log(products);
        console.log(selectedProducts);
        let newCart = []
        const exists = cart.find(product => selectedProducts.id === product.id);
        if(!exists){
           selectedProducts.quantity = 1;
           newCart = [...cart, selectedProducts];
        }
        else{
          const rest = cart.filter(product => selectedProducts.id !== product.id);
          exists.quantity = exists.quantity + 1;
          newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProducts.id);
    }

    return (
        <div className="container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>  
                    </Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart} >
                   <Link to="/order">
                       <button>Review Orders</button>
                   </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;