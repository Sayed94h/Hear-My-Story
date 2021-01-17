import React, { Component } from 'react';
import './Gallery.css';
import Story from './Story';
import SmallStory from './SmallStory';
import { storyA } from './fixtures/stories';

export default class Gallery extends Component {
  render() {
    return (
        <section className="Gallery">
          <Story {...storyA} />
          <SmallStory  {...storyA} />
        </section>
    );
  }
}