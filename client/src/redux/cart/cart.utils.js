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

export const removeItemFromCart = (stateCartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return stateCartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return stateCartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
