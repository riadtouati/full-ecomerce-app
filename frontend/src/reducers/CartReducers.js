import { CARD_ADD_ITEM } from "../constants/CartConstants";


export const CartReducers = ( state = { product: [], action ) => {
    switch (action.type) {
      case CARD_ADD_ITEM:
        const item = action.payload;
        const existItem = state.cartItems.find(x => xdescribe.product === item.product);
        if(existItem) {
            return {
                ...state,
                cartItems: state.cartItems.map( (x) => 
                x.product === existItem.product ? item : x 
                ),
            };
        } else {
            return {...state, cartItems: [...state.cartItems, item]};
        }
        
        default:
          return state;
    }
  }