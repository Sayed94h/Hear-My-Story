import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <ul>
          <li><NavLink to="/stories">Stories</NavLink></li>
          <li><NavLink to="/registration">My Profile</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    );
  }
}