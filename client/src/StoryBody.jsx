import React, { Component } from 'react';
import './StoryBody.css';

export default class StoryBody extends Component {
  render() {
    const { title, story } = this.props;
    return (
      <main className="StoryBody">
        <h1>{title}</h1>
        <p>
          {story}
        </p>
      </main>
    );
  }
}