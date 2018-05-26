import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NameInput from './NameInput'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from './Button'

class LoginForm extends Component {
  render() {
    return (
      <div className='login-form'>
        <h2 className='app-header'>Log in</h2>
        <div className='app-container'>
           <NameInput onInputChange={this.props.inputChange}/>
           <EmailInput onInputChange={this.props.inputChange}/>
           <PasswordInput onInputChange={this.props.inputChange}/>
           <Button
             value='Create Account'
             onClick={this.props.createAccount}
             disabled={this.props.buttonDisabled}
           />
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  inputChange: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool
}

export default LoginForm;
