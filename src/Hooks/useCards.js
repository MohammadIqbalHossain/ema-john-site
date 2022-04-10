import { useEffect, useState } from "react"
import { getStroedCart } from "../utilities/fakedb"

const useCards = (products) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const stroedItems = getStroedCart();
        const savedCart = [];
        for(const id in stroedItems){
            const addedCart = products.find(product => product.id === id);
            if(addedCart){
                const quantity = stroedItems[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
            }
            
        }
        setCards(savedCart);
      
    }, [products])
    
    return [cards, setCards];
}

export default useCards;
