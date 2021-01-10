import React, { Component } from 'react';
import './UserSignUp.css';
import Field from "./Field";

export default class UserSignUp extends Component {

  handleSubmit = (event) => {
  }

  //function to update state when a form field is changed
  handleChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
  }

  render() {
    return (
      <main className="UserSignUp">
        <div>
          <h1 className="title">Get Started With Your account</h1>
          <div>
          <div className="UserSignUp-Images">
            <img alt="Picture of a refugee scene" src={"/refugee1.jpg"}/>
            <img alt="Picture of a refugee scene" src={"/refugee2.jpg"}/>
            <img alt="Picture of a refugee scene" src={"/refugee3.jpg"}/>
          </div>
            <form onSubmit={this.handleSubmit}>
              <Field
                inputName={"email"}
                type={"type"}
                placholder={"Email Address"}
                label={"Email Address"}
                onChange={this.handleChange}
              />

              <Field
                inputName={"name"}
                type={"type"}
                placholder={"Name"}
                label={"Name"}
                onChange={this.handleChange}
              />

              <Field
                inputName={"password"}
                type={"password"}
                placholder={"password"}
                label={"Password"}
                onChange={this.handleChange}
              />

              <button className="Button">Sign Up</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

}