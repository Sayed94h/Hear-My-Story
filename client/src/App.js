import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import toProfile from './toProfile';
import Home from './Home';
import Registration from './registration';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';

import './App.css';

import Header from "./Header";
import CreateStory from './CreateStory';
import MyStories from './MyStories';
import Stories from "./Stories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/stories" component={Stories} />
          <Route path="/profile/stories" component={withAuth(MyStories)} />
          <Route path="/profile" component={withAuth(CreateStory)} />
          <Route path="/profile" component={withAuth(CreateStory)} />
          <Route path="/registration" component={toProfile(Registration)} />
          <Route exact path='/signin' component={toProfile(UserSignIn)} />
          <Route exact path='/signup' component={toProfile(UserSignUp)} />
        </Switch>
      </div>
    );
  }
}

export default App;
