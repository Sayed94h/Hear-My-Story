import React, { Component } from 'react';
import './UserSignUp.css';
import Field from "./Field";
import { Redirect } from "react-router-dom";

export default class UserSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectToProfile: false,
      error: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const root = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

    fetch(
      `${root}/api/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state?.email,
          name: this.state?.name,
          password: this.state?.password
        })
      }
    )
    .then(response => response.json())
    .then((data) => {
      if (data.success === true) {
        this.setState({
          redirectToProfile: true
        });
      } else if (data.message) {
        this.setState({
          error: data.message
        })
      }
    })
      .catch((error) => {
        this.setState({
          error: true
        })
      })
  }

  //function to update state when a form field is changed
  handleChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
  }

  render() {
    if (this.state.redirectToProfile === true) {
      return <Redirect to={"/profile"} />
    }

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
                required={true}
                inputName={"email"}
                type={"type"}
                placholder={"Email Address"}
                label={"Email Address"}
                onChange={this.handleChange}
              />

              <Field
                required={true}
                inputName={"name"}
                type={"type"}
                placholder={"Name"}
                label={"Name"}
                onChange={this.handleChange}
              />

              <Field
                required={true}
                inputName={"password"}
                type={"password"}
                placholder={"password"}
                label={"Password"}
                onChange={this.handleChange}
              />

              <button className="Button">Sign Up</button>

              {this.state.error ? <p className="error">{this.state.error}</p> : null}
            </form>
          </div>
        </div>
      </main>
    );
  }

}