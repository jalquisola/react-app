import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Welcome = (props) => {
  return (
    <div className='login-form'>
      <h2 className='app-header'>Welcome, {props.name}!</h2>
      <div className='app-container'>
         <Button value='Logout' onClick={props.logout}/>
      </div>
    </div>
  )
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

export default Welcome;
