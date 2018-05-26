import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div>
      <input
        type='button'
        disabled={props.disabled}
        value={props.value}
        onClick={props.onClick}
      />
    </div>
  )
}

Button.defaultProps = {
  disabled: false
}

Button.proptypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Button;
