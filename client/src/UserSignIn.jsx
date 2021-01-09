import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


export default class UserSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="title">Welcome Back</h1>
        <form className="formsub" onSubmit={this.handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <p>Password</p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p></p>
        <input type="submit" value="Log In" />
      </form>
          
      </div>
      
    );
  }
}
