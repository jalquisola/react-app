import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <div>
        <input
          type='button'
          disabled={this.props.disabled}
          value={this.props.value}
          onClick={this.props.onClick}
        />
      </div>
    )
  }
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
