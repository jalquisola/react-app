import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Welcome extends Component {
  render() {
    return (
      <div className='login-form'>
        <h2 className='app-header'>Welcome, {this.props.name}!</h2>
        <div className='app-container'>
           <Button value='Logout' onClick={this.props.logout}/>
        </div>
      </div>
    )
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
}

export default Welcome;
