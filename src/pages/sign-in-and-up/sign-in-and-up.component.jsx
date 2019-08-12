import React from 'react';

import SignInContainer from '../../components/sign-in/sign-in.container';
import SignUpContainer from '../../components/sign-up/sign-up.container';

import { SignInAndUpPageContainer } from './sign-in-and-up.styles';

const SignInAndUp = () => {
  return (
    <SignInAndUpPageContainer>
      <SignInContainer />
      <SignUpContainer />
    </SignInAndUpPageContainer>
  );
};

export default SignInAndUp;
