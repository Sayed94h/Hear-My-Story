import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './UserSignIn.css'
import Field from "./Field";

export default class UserSignIn extends Component {

  //function to update state when a form field is changed
  handleChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
  }

  render() {
    return (
      <main className="UserSignIn">
        <div >
          <h1 className="signintitle">Welcome Back</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <Field
              inputName={"email"}
              type={"type"}
              placholder={"Email Address"}
              label={"Email Address"}
              onChange={this.handleChange}
            />
            <Field
              inputName={"password"}
              type={"password"}
              placholder={"Password"}
              label={"Password"}
              onChange={this.handleChange}
            />
            <p>
              <button className="Button" type="submit">Log In</button>
            </p>
          </form>

          <p>Don't have a profile? <Link to="/signup">Sign Up</Link></p>
        </div>
      </main>
    )  
  }
}