import React, { Component } from 'react';
import './Story.css';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

export default class Story extends Component {
  render() {
    return (
        <article className="Story">
          <StoryHeader />
          <StoryBody />
          <StoryFooter />
        </article>
    );
  }
}