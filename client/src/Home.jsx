import React, { Component } from 'react';
import './Home.css';
import EyeCatcher from "./EyeCatcher";
import Gallery from "./Gallery";

export default class Home extends Component {
  render() {
    return (
      <main className="Home">
        <EyeCatcher />
        <Gallery />
      </main>
    );
  }
}