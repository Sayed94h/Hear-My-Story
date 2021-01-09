import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './UserSignUp.css';


export default function App() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Name: ${name}
      Password: ${password}
    `);
    
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">Get Started With Your account</h1>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        name
        <input
          name="name"
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>
      
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      <button>Sign Up</button>
    </form>
    
  );
}