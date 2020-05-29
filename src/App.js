import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // method on firebase/auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
