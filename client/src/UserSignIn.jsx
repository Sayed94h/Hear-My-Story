import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserSignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
    };
  
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div> 
        <h1>Welcome Back</h1>
        <form onSubmit ={this.handleInputChange}>
            <label>
                <p>Email</p>
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
            </label>
            <label>
                <p>Password</p>
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
            </label>
            <p></p>
            <button type="submit">Log In</button>
        </form>
        <p>Don't have a profile? <Link to ="/signup">Sign up</Link></p>
      </div>
    );
  }
}