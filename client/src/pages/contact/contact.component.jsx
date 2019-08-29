import React from 'react';

import {
  ContactPageOverlay,
  StyledHeader,
  StyledLink,
  StyledText
} from './contact.styles';

const ContactPage = () => (
  <ContactPageOverlay>
    <StyledHeader>Contact</StyledHeader>
    <StyledText>
      Since this is a mock project and not a real E-Commerce app I won't inlude
      any real contact info. Instead I'll leave here this link to the{' '}
      <StyledLink
        href='https://github.com/rosowskimik/e-commerce-clothing'
        target='_blank'
        rel='noopener noreferrer'
      >
        source code
      </StyledLink>{' '}
      for this page. Hope you have a nice day :)
    </StyledText>
  </ContactPageOverlay>
);

export default ContactPage;
