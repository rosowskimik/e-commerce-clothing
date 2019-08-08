import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer
    size={size}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <ContentContainer>
      <h1>{title}</h1>
      <span>Shop now</span>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
