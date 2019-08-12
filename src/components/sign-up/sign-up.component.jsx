import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    this.setState({ error: null });
    const { displayName, email, password, confirmPassword } = this.state;

    if (password.length < 6) {
      this.setState({ error: 'Password must be at least 6 characters long' });
      return;
    } else if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }
    signUpStart(email, password, displayName);
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  render() {
    const { displayName, email, password, confirmPassword, error } = this.state;

    return (
      <SignUpContainer>
        <h2>I do not have an account</h2>
        <span>Create an account using your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            error={error}
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label={error ? error : 'Confirm Password'}
            error={error}
            onChange={this.handleChange}
          />
          <CustomButton type='submit'>Create an account</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
