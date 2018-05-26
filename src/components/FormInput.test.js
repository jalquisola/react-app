import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';

describe('when FormInput has properties', () => {
  it('renders input with the correct properties', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<FormInput
      inputType={'text'}
      labelText={'Name'}
      name={'name'}
      onChange={onChange}
    />)

    const input = wrapper.find('input')

    expect(input.length).toEqual(1)
    expect(input.prop('type')).toEqual('text')
    expect(input.prop('placeholder')).toEqual('Name')
    expect(input.prop('name')).toEqual('name')
    expect(input.prop('onChange')).toEqual(wrapper.instance().handleChange)
  })
})

describe('when FormInput changes value', () => {
  const onChange = jest.fn()
  const wrapper = shallow(<FormInput
    inputType={'text'}
    labelText={'Name'}
    name={'name'}
    onChange={onChange}
  />)

  const input = wrapper.find('input')
  input.simulate('change', {target: {value: 'test'}})

  it('calls onChange property', () => {
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('name', 'test')
  })

  it('sets the state correctly', () => {
    expect(wrapper.state('value')).toEqual('test')
  })
})
