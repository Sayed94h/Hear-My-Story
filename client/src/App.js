import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Secret from './Secret';
import Registration from './registration';
import Usersignin from './UserSignIn';
import Usersignup from './UserSignUp';

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
          <Route exact path='/signin' render={(history) => <Usersignin history={history} />} />
          <Route exact path='/signup' render={(history) => <Usersignup history={history} />} />
          
          
        </Switch>
      </div>
    );
  }
}

export default App;
