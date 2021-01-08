import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SignIn: null,
      email : '',
      name: '',
      password: '',
      confirmPassword: '',
      passwordMatch: true,
      emailUse: null
    };
  
  }

  createUser = (callback) => {
    if(this.state.password !== this.state.confirmPassword){
      this.setState({
        validationErrors: null,
        passwordMatch: false
      });
    } else{
      const formatData ={
        'email': this.state.email,
        'name': this.state.name,
        'password': this.state.password,
      }
    }
  }






  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <div>
        <h1>Join Hear My Story</h1>
        <p>Create a profile to share your story.</p>
        <p>Share your story so others can hear it.</p>
        <p>Already have an account? <Link to ="/SignIn">Sign in</Link></p>
      </div>
    );
  }
}