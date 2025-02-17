import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import  { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    // method on firebase/auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={ () => 
            this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndUp />) 
          } />
          <Route exact path='/checkout' render={ () => 
            this.props.currentUser ? (<Redirect to='/signin'/>) : (<CheckoutPage />) 
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

// first arg is null because no state to props
// second arg is 
export default connect(mapStateToProps, mapDispatchToProps)(App);
