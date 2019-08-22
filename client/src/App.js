import React, { useEffect, lazy, Fragment, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkCurrentUser } from './redux/user/user.actions';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

import { GlobalStyle } from './global.styles';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndUp = lazy(() =>
  import('./pages/sign-in-and-up/sign-in-and-up.container')
);
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ currentUser, checkCurrentUser }) => {
  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <SignInAndUp />)}
          />
          <Route exact path='/checkout' component={Checkout} />
        </Suspense>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkCurrentUser: () => dispatch(checkCurrentUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
