import React, { Component } from 'react';
import './BigStory.css';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

export default class BigStory extends Component {
  render() {
    const { author, created, story, title } = this.props;
    return (
        <article className="BigStory">
          <StoryHeader author={author} created={created} />
          <StoryBody story={story} title={title} />
          <StoryFooter />
        </article>
    );
  }
}