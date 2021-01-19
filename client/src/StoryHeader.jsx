import React, { Component } from 'react';
import './StoryHeader.css';

export default class StoryHeader extends Component {
  render() {
    const { author, created } = this.props;
    return (
      <header className="StoryHeader">
        <p>
          {author?.name}
        </p>
        <p>
          {(new Date(created)).toLocaleDateString()}
        </p>
      </header>
    );
  }
}