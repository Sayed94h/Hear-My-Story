import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <main className="About">
        <h1>This project was made by a HackYourFuture team 🇧🇪</h1>
        <p>Made with love 💕 by</p>
        <ul>
          <li>Ms Murielle Negue</li>
          <li>Mr Abel Roland</li>
          <li>Mr Eltayeb</li>
          <li>Mr Hazem</li>
          <li>Mr Harun</li>
          <li>Mr Sayed</li>
          <li>Mr Yared</li>
        </ul>

        <p>
          <a href={"https://github.com/Sayed94h/Hear-My-Story"}>Contribute on Github</a>
        </p>
      </main>
    );
  }
}