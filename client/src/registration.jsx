import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './registration.css';
import LinkButton from "./LinkButton";

export default class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {
    return (
      <main className="Registration">
        <div>
          <h1>Join Hear My Story</h1>

          <div className="Registration-Subtitle">
            <p>
              Create a profile to share your Story.<br />
              Share your story so others can hear it.
            </p>
          </div>

          <div className="Registration-Signup">
            <p>
              <LinkButton to="/signup">Sign up with an email</LinkButton>
            </p>
          </div>

          <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
      </main>
    );
  }
}
