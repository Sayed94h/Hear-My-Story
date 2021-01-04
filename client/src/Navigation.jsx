import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <ul>
          <li><Link to="/">Stories</Link></li>
          <li><Link to="/login">My Profile</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
      </nav>
    );
  }
}