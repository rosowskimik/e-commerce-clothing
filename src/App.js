import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import Checkout from './pages/checkout/checkout.component.jsx';

import './App.css';

class App extends Component {
  componentDidMount() {
    // const { setCurrentUser } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     this.unsubscribeFromSnapShot = userRef.onSnapshot(
    //       snapShot => {
    //         setCurrentUser({
    //           id: userRef.id,
    //           ...snapShot.data()
    //         });
    //       },
    //       error => setCurrentUser(null)
    //     );
    //   }
    // });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndUp />
            }
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
