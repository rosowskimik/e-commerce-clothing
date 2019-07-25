import cartTypes from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    case cartTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
