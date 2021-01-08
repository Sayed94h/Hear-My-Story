import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


export default class UserSignUp extends Component {

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
        <h1>Join Hear My Story</h1>
        <form onSubmit ={this.handleInputChange}>
            <label>
                <p>Email</p>
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
            </label>
            <label>
                <p>name</p>
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
            </label>
            <label>
                <p>Password</p>
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
            </label>
            <p></p>
            <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
