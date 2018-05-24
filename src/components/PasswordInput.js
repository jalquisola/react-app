import React, { Component } from 'react';
import FormInput from './FormInput';

class PasswordInput extends Component {
  render() {
    return (
      <FormInput 
        name='password'
        onChange={this.props.onInputChange}
        labelText='Password'
        inputType='password'
      />
    )
  }
}

export default PasswordInput;
