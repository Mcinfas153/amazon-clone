export const initialState = {
    cart: [],
    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET": {
            return { ...state, cart: [...state.cart, action.item] }
            break;
        }
        default:
            return state;
    }
};

export default reducer;