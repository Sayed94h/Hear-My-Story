import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './UserSignIn.css'
import Field from "./Field";

export default class UserSignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectToProfile: false,
      error: false
    }
  }

  //function to update state when a form field is changed
  handleChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const root = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
    fetch(
      `${root}/api/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state?.email,
          password: this.state?.password
        })
      }
    )
      .then(response => response.json())
      .then((data) => {
        if (data.success === true) {
          this.setState({
            redirectToProfile: true
          })
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

  render() {
    if (this.state.redirectToProfile === true) {
      return <Redirect to={"/profile"} />
    }

    return (
      <main className="UserSignIn">
        <div >
          <h1 className="signintitle">Welcome Back</h1>
          <form onSubmit={this.handleSubmit}>
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

            {this.state.error ? <p className="error">{this.state.error}</p> : null}
          </form>

          <p>Don't have a profile? <Link to="/signup">Sign Up</Link></p>
        </div>
      </main>
    )  
  }
}