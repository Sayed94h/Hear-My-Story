import React, { Component } from 'react';
import './Story.css';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

export default class Story extends Component {
  render() {
    const { author, created, story, title } = this.props;
    return (
        <article className="Story">
          <StoryHeader author={author} created={created} />
          <StoryBody story={story} title={title} />
          <StoryFooter />
        </article>
    );
  }
}