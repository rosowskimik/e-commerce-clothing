import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsLoading } from '../../redux/user/user.selectors';
import { signUpStart } from '../../redux/user/user.actions';

import SignUp from './sign-up.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading
});

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart(email, password, displayName))
});

const SignUpContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithSpinner
)(SignUp);

export default SignUpContainer;
