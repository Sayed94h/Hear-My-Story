import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Secret from './Secret';
import Registration from './registration';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';

import './App.css';

import Header from "./Header";
import Stories from './Stories';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/stories" component={Stories} />
          <Route path="/registration" component={Registration} />
          <Route exact path='/signin' render={(history) => <UserSignIn history={history} />} />
          <Route exact path='/signup' render={(history) => <UserSignUp history={history} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
