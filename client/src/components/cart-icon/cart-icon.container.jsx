import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartIcon from './cart-icon.component';

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

export default CartIconContainer;
