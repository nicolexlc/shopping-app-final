import { createContext, useReducer, useContext } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context =  ({ children }) => {

    const products = [...Array(21)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),        
        department: faker.commerce.department(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.random.numeric(1),
    }));

    console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byGarden: false,
        byToys: false,
        byGrocery: false,
        byMusic: false,
        byComputers: false,
        byAutomotive: false,
        searchQuery: "",
    });

    return  <Cart.Provider value={{ state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>;
};


export const CartState= () => {
return useContext(Cart);
}

export default Context;
