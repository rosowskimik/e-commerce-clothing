import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItemContainer from '../collection-item/collection-item.container';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, match }) => {
  // console.log(props);
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`${match.path}/${routeName}`}>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItemContainer key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
