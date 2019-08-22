import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from './collection-item.component';

const ADD_ITEM = gql`
  mutation AddItem($item: Item!) {
    addItem(item: $item) @client
  }
`;

const CollectionItemContainer = props => (
  <Mutation mutation={ADD_ITEM}>
    {addItem => (
      <CollectionItem
        {...props}
        addItem={item => addItem({ variables: { item } })}
      />
    )}
  </Mutation>
);

export default CollectionItemContainer;
