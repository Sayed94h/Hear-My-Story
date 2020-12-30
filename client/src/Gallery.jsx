import React, { Component } from 'react';
import './Gallery.css';
import Story from "./Story";
import SmallStory from "./SmallStory"

export default class Gallery extends Component {
  render() {
    return (
        <section className="Gallery">
          <Story />
          <SmallStory />
        </section>
    );
  }
}