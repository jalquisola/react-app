import React, { Component } from 'react';
import FormInput from './FormInput';

class NameInput extends Component {
  render() {
    return (
      <FormInput
        name='name'
        onChange={this.props.onInputChange}
        labelText='Name'
        inputType='text'
      />
    )
  }
}

export default NameInput;
