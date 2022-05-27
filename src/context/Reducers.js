export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart, {...action.payload, qty: 1}]};
        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter(c=>c.id!== action.payload.id)};
        case "CHANGE_CART_QTY":
            return {...state, cart:state.cart.filter(c=>c.id===action.payload.id?c.qty=action.payload.qty:c.qty)};
        default:
            return state;
    }
};

export const productReducer= (state,action) => {
        switch(action.type) {
            case "SHOW_GARDEN":
                return {...state, byGarden: !state.byGarden};
            case "SHOW_TOYS":
                return {...state, byToys: !state.byToys};
            case "SHOW_GROCERY":
                return {...state, byGrocery: !state.byGrocery};
            case "SHOW_MUSIC":
                return {...state, byMusic: !state.byMusic};
            case "SHOW_COMPUTERS":
                return {...state, byComputers: !state.byComputers};
            case "SHOW_AUTOMOTIVE":
                return {...state, byAutomotive: !state.byAutomotive};   
            case "FILTER_BY_SEARCH":
                return {...state, searchQuery: action.payload };
            case "CLEAR_FILTERS":
                return {
                    byGarden: false,
                    byToys: false,
                    byGrocery: false,
                    byMusic: false,
                    byComputers: false,
                    byAutomotive: false,
                };
            default:
                return state;
        }
    }
    