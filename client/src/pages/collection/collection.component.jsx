import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItemContainer from '../../components/collection-item/collection-item.container';

import { CollectionPageContainer, ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <h2>{title}</h2>
    <ItemsContainer>
      {items.map(item => (
        <CollectionItemContainer key={item.id} item={item} />
      ))}
    </ItemsContainer>
  </CollectionPageContainer>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
