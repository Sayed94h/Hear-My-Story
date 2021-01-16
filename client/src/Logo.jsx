import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Logo extends Component {
  render() {
    return (
      <Link to={'/'}>
        <img src="/logo.svg"  alt="Logo of Hear My Story"/>
      </Link>
    );
  }
}