import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Googlesignup from "./googlesignup";

import './registration.css';



export default class registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  //function to set state if a form field is changed
  handleChange = (e, state) => {
    this.setState({
      [state]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1 className="title">Join Hear My Story</h1>
        <div className="soustitle">
          <p>Create a profile to share your Story.<br></br> Share your story so others can hear it.</p>
        </div>
        <div className="Googlesignup">
          <Googlesignup />
        </div>
          
        <p></p>
        <Link className="FaceBooksignup" to="/signin">Sign Up with Facebook</Link>
        <p></p>
        <div>
          <Link className="emailsignup" to ="/signup">Sign up with an email</Link>
        </div>
        
        <p></p>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    );
  }
}
