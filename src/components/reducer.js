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
        default:
            return state;
    }
};

export default reducer;