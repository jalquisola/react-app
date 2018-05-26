import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from './PasswordInput';
import FormInput from './FormInput';

it('renders without crashing', () => {
  shallow(<PasswordInput />);
});

describe('when PasswordInput has properties', () => {
  it('renders FormInput with the correct properties', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<PasswordInput onInputChange={onChange} />)
    const input = wrapper.find(FormInput)

    expect(input.length).toEqual(1)
    expect(input.prop('name')).toEqual('password')
    expect(input.prop('labelText')).toEqual('Password')
    expect(input.prop('inputType')).toEqual('password')
    expect(input.prop('onChange')).toEqual(onChange)
  })
})
