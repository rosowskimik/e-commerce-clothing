import React, { useEffect, lazy, Fragment, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkCurrentUser } from './redux/user/user.actions';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import NotFound from './pages/not-found/not-found.component';

import { GlobalStyle } from './global.styles';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Contact = lazy(() => import('./pages/contact/contact.component'));
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
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={Contact} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndUp />
              }
            />
            <Route exact path='/checkout' component={Checkout} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
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
