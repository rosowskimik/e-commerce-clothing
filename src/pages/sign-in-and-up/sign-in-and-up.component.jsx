import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndUpPageContainer } from './sign-in-and-up.styles';

const SignInAndUp = () => {
  return (
    <SignInAndUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInAndUpPageContainer>
  );
};

export default SignInAndUp;
