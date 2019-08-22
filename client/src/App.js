import React, { useEffect, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkCurrentUser } from './redux/user/user.actions';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUpContainer from './pages/sign-in-and-up/sign-in-and-up.container';
import Checkout from './pages/checkout/checkout.component.jsx';

import { GlobalStyle } from './global.styles';

const App = ({ currentUser, checkCurrentUser }) => {
  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndUpContainer />
          }
        />
        <Route exact path='/checkout' component={Checkout} />
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
