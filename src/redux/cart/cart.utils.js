export const addItemToCart = (stateCartItems, cartItemToAdd) => {
  const existingCartItem = stateCartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return stateCartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...stateCartItems, { ...cartItemToAdd, quantity: 1 }];
};
