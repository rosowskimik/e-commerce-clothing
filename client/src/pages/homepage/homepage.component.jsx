import React from 'react';

import DirectoryContainer from '../../components/directory/directory.container';

import { HomepageContainer } from './homepage.styles';

const Homepage = () => {
  return (
    <HomepageContainer>
      <DirectoryContainer />
    </HomepageContainer>
  );
};

export default Homepage;
