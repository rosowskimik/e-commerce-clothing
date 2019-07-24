import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemsCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <BagIcon className='bag-icon' />
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
