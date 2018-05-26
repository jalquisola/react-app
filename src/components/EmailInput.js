import React from 'react';
import FormInput from './FormInput';

const EmailInput = (props) => {
  return (
    <FormInput
      name='email'
      onChange={props.onInputChange}
      labelText='Email'
      inputType='email'
    />
  )
}

export default EmailInput;
