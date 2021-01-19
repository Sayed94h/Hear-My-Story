import React, { Component } from 'react';
import './Home.css';
import EyeCatcher from "./EyeCatcher";
import Gallery from "./Gallery";

export default class Home extends Component {
  render() {
    return (
      <main className="Home">
        <div className="Home-Container">
          <EyeCatcher />
          <Gallery />
        </div>
        <div className="Home-VideoContainer">
          <video controls width="50%">
              <source src="/video.mp4" type="video/mp4"/>
                Sorry, your browser doesn't support embedded videos.
          </video>
          <EyeCatcher title={"Make a change"} />
        </div>
      </main>
    );
  }
}