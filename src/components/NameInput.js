import React from 'react';
import FormInput from './FormInput';

const NameInput = (props) => {
  return (
    <FormInput
      name='name'
      onChange={props.onInputChange}
      labelText='Name'
      inputType='text'
    />
  )
}

export default NameInput;
