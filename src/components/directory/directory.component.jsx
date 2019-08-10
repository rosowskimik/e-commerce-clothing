import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

export default Directory;
