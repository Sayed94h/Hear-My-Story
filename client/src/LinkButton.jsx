import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './LinkButton.css';

export default class LinkButton extends Component {
  render() {
    return (
      <Link {...this.props} className="LinkButton">
        {this.props.children}
      </Link>
    );
  }
}