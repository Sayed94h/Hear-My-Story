import React, { Component } from 'react';

import './Field.css';

export default class Field extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //function to update state when a form field is changed
  handleChange = (e, state) => {
    this.setState({
      [state]: e.target.value
    });

    this.props.onChange(this.props.inputName, e.target.value);
  }

  render() {
    return (
      <div className="Field">
        <label htmlFor={this.props.inputName}>{this.props.label}</label> <br/>
        <input id={this.props.inputName} name={this.props.inputName} type={this.props.type} className="" placeholder={this.props.placeholder}
               value={this.state[this.props.inputName]} onChange={(e) => this.handleChange(e, this.props.inputName)} />
      </div>
    );
  }
}