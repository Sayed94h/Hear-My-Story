import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './UserSignIn.css'


export default class UserSignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  //function to update state when a form field is changed
  handleChange = (e, state) => {
    this.setState({
      [state]: e.target.value
    });
  }


  generateFormInput = (inputName, type, placeholder) => {
    return (
      <div>
        <input id={inputName} name={inputName} type={type} className="" placeholder={placeholder}
          value={this.state.inputName} onChange={(e) => this.handleChange(e, inputName)} />
      </div>
    )
  }


  render() {
    const email = this.state.emailAddress;
    const pass = this.state.password;
    return (
    <div >
      <div >
        <h1 className="signintitle">Welcome Back</h1>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            {this.generateFormInput("email", "text", "Email Address")}
            {this.generateFormInput("password", "password", "Password")}
            <button className="button" type="submit">Log In</button>
          </form>
        </div>
        <p>&nbsp;</p>
        <p>Don't have a profile <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
    )  
  }
}