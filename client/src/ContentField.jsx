import React, { Component } from 'react';

import './ContentField.css';

export default class ContentField extends Component {

  defaultProps = {
    required: false
  }

  constructor(props) {
    super(props);
    this.state = {
      [props.inputName]: ''
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
      <div className="ContentField">
        <label htmlFor={this.props.inputName}>{this.props.label}</label> <br/>
        <textarea
          required={this.props.required}
          id={this.props.inputName}
          name={this.props.inputName}
          onChange={(e) => this.handleChange(e, this.props.inputName)}
        >
          {this.state[this.props.inputName]}
        </textarea>
      </div>
    );
  }
}