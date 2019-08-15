import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import CheckoutItem from './checkout-item.component';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: id => dispatch(clearItem(id))
});

const CheckoutItemContainer = connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

export default CheckoutItemContainer;
