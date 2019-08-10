import React from 'react';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  PriceContainer,
  AddButton
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span>{name}</span>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
