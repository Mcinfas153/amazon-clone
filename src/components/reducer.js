import { act } from "react-dom/test-utils";

export const initialState = {
    cart: [],
    user: null,
    isLogin: false,
    grandTotal: 0,
    isButtonDisabled: false
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.productPrice + amount, 0);

const reducer = (state, action) => {
    //console.log(state)
    switch (action.type) {
        case "ADD_TO_BASKET": {
            //return { ...state, isButtonDisabled: true }
            return { ...state, cart: [...state.cart, action.item] }
            break;
        }
        case "LOGIN": {
            return { ...state, isLogin: (state.isLogin) ? false : true }
            break;
        }
        case "REMOVE_FROM_BASKET": {
            let newCart = state.cart.filter(item => item.id !== action.id)
            return { ...state, cart: newCart }
            break;
        }
        case "SIGNIN_USER": {
            return { ...state, user: action.user }
        }
        case "SIGNOUT_USER": {
            return { ...state, user: action.user }
        }
        default:
            return state;
    }
};

export default reducer;