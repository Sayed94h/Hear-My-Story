import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
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
import StoryDetail from "./StoryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/stories/:id" exact component={StoryDetail} />
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
