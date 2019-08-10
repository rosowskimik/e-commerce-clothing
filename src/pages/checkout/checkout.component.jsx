import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import CheckoutItemContainer from '../../components/checkout-item/checkout-item.container';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  EmptyMessage,
  TotalPrice,
  TestWarning
} from './checkout.styles';

const Checkout = ({ cartItems, totalPrice }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.length ? (
      cartItems.map(cartItem => (
        <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
      ))
    ) : (
      <EmptyMessage>Your cart is empty</EmptyMessage>
    )}
    <TotalPrice>Total: {totalPrice}$</TotalPrice>
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 03/24 - CVV: 123
    </TestWarning>
    <StripeButton price={totalPrice} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
