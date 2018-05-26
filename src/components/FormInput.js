import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    }
  }

  handleChange (e) {
    this.setState({value: e.target.value})
    this.props.onChange(this.props.name, e.target.value)
  }

  render() {
    return (
      <div>
        <input
          type={this.props.inputType}
          placeholder={this.props.labelText}
          name={this.props.name}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired
}

export default FormInput;
