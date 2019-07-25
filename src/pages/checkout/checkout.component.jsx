import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = ({ cartItems, totalPrice }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length ? (
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    ) : (
      <span className='empty-message'>Your cart is empty</span>
    )}
    <span className='total-price'>Total: {totalPrice}$</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
