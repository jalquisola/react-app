import React from 'react';
import { shallow } from 'enzyme';
import EmailInput from './EmailInput';
import FormInput from './FormInput';

it('renders without crashing', () => {
  shallow(<EmailInput />);
});

describe('when EmailInput has properties', () => {
  it('renders FormInput with the correct properties', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<EmailInput onInputChange={onChange} />)
    const input = wrapper.find(FormInput)

    expect(input.length).toEqual(1)
    expect(input.prop('name')).toEqual('email')
    expect(input.prop('labelText')).toEqual('Email')
    expect(input.prop('inputType')).toEqual('email')
    expect(input.prop('onChange')).toEqual(onChange)
  })
})
