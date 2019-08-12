import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsLoading } from '../../redux/user/user.selectors';

import SignUp from './sign-up.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading
});

const SignUpContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SignUp);

export default SignUpContainer;
