import React, { Component } from 'react';
import FormInput from './FormInput';

class EmailInput extends Component {
  render() {
    return (
      <FormInput
        name='email'
        onChange={this.props.onInputChange}
        labelText='Email'
        inputType='email'
      />
    )
  }
}

export default EmailInput;
