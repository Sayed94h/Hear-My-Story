import React, { Component } from 'react';
import './EyeCatcher.css';

export default class EyeCatcher extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h2 className="EyeCatcher">{this.props.title ? this.props.title : 'Tell Your Story'}</h2>
    );
  }
}