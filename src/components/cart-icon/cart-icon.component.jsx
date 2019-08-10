import React from 'react';

import {
  CartIconContainer,
  BagIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ itemsCount, toggleCartHidden }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <BagIcon />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
  </CartIconContainer>
);

export default CartIcon;
