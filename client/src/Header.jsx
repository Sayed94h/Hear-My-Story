import React, { Component } from 'react';
import Logo from "./Logo";
import Navigation from "./Navigation";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Logo />
        <Navigation />
      </header>
    );
  }
}