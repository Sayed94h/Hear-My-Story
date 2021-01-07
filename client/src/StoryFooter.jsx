import React, { Component } from 'react';
import './StoryFooter.css';
import {Link} from "react-router-dom";

export default class StoryFooter extends Component {
  render() {
    return (
      <footer className="StoryFooter">
        <Link to="/">Hear more</Link>
        <div className="StoryFooter-Reactions">
          <p>
            6
          </p>
          <figure>
            <img src="/ear.svg" alt="Reaction sign" />
          </figure>
        </div>
      </footer>
    );
  }
}