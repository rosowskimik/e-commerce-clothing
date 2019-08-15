import React from 'react';

import SignInContainer from '../../components/sign-in/sign-in.container';
import SignUpContainer from '../../components/sign-up/sign-up.container';

import { SignInAndUpPageContainer, StyledError } from './sign-in-and-up.styles';

const SignInAndUp = ({ error }) => (
  <SignInAndUpPageContainer>
    <StyledError error={error}>{error}</StyledError>
    <SignInContainer />
    <SignUpContainer />
  </SignInAndUpPageContainer>
);

export default SignInAndUp;
