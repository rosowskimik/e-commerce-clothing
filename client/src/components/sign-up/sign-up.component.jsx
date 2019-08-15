import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import { SignUpContainer, StyledCustomButton } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null
  });
  const {
    displayName,
    email,
    password,
    confirmPassword,
    error
  } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password.length < 6) {
      setUserCredentials({
        ...userCredentials,
        error: 'Password must be at least 6 characters long'
      });
      return;
    } else if (password !== confirmPassword) {
      setUserCredentials({
        ...userCredentials,
        error: 'Passwords do not match'
      });
      return;
    }
    signUpStart(email, password, displayName);
    setUserCredentials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    });
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Create an account using your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          onChange={handleChange}
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          error={error}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label={error ? error : 'Confirm Password'}
          error={error}
          onChange={handleChange}
          required
        />
        <StyledCustomButton type='submit'>Create an account</StyledCustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
