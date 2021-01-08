import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Secret from './Secret';
import Registration from './registration';
import SignIn from './UserSignIn';
import SignUp from './UserSignUp';
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/registration" component={Registration} />
          <route path="/UserSignIn" component={SignIn} />
          <Route exact path='/signin' render={(history) => <SignIn />} />
          <Route exact path='/signup' render={(history) => <SignUp />} />
        </Switch>
      </div>
    );
  }
}

export default App;
