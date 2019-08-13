import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectError, selectIsLoading } from '../../redux/user/user.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SignInAndUp from './sign-in-and-up.component';

const mapStateToProps = createStructuredSelector({
  error: selectError,
  isLoading: selectIsLoading
});

const SignInAndUpContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SignInAndUp);

export default SignInAndUpContainer;
