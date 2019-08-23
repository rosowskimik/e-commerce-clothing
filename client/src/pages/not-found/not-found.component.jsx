import React from 'react';

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeader,
  NotFoundText
} from './not-found.styles';

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage imageUrl='https://i.imgur.com/hkRuanu.png' />
    <NotFoundHeader>This Page is Not Real</NotFoundHeader>
    <NotFoundText>
      The imposing figure with the trenchcoat shows you the two polaroids. One
      appears to show the Loch Ness monster herself in the middle of a stretch
      of dark water. The other shows a sasquatch picking it’s way through a dark
      forest. You look closer. The animal shapes are drawn on with ink. “This
      isn’t real!” You scream and throw the polaroids to the floor, sobbing.
    </NotFoundText>
  </NotFoundContainer>
);

export default NotFound;
