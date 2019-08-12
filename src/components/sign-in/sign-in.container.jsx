import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsLoading, selectError } from '../../redux/user/user.selectors';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import SignIn from './sign-in.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  error: selectError
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

const SignInContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithSpinner
)(SignIn);

export default SignInContainer;
