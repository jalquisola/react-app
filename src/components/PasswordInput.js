import React from 'react';
import FormInput from './FormInput';

const PasswordInput = (props) => {
  return (
    <FormInput
      name='password'
      onChange={props.onInputChange}
      labelText='Password'
      inputType='password'
    />
  )
}

export default PasswordInput;
