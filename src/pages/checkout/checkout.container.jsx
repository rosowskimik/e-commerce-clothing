import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CheckoutPageContainer = () => (
  <Query query={GET_CART_ITEMS}>
    {({ data: { cartItems } }) => <CheckoutPage cartItems={cartItems} />}
  </Query>
);

export default CheckoutPageContainer;
