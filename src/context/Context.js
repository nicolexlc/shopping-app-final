import { createContext, useReducer, useContext } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context =  ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),        
        department: faker.commerce.department(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.random.numeric(2),
    }));

    //console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    return  <Cart.Provider value={{ state, dispatch}}>{children}</Cart.Provider>;
};

export default Context;

export const CartState= () => {
return useContext(Cart);
}

