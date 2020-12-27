import React, { Component } from 'react';
import './Gallery.css';
import Story from "./Story";

export default class Gallery extends Component {
  render() {
    return (
        <section className="Gallery">
          <Story />
          <Story />
        </section>
    );
  }
}