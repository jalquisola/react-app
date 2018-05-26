import React from 'react';
import { shallow } from 'enzyme';
import NameInput from './NameInput';
import FormInput from './FormInput';

it('renders without crashing', () => {
  shallow(<NameInput />);
});

describe('when NameInput has properties', () => {
  it('renders FormInput with the correct properties', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<NameInput onInputChange={onChange} />)
    const input = wrapper.find(FormInput)

    expect(input.length).toEqual(1)
    expect(input.prop('name')).toEqual('name')
    expect(input.prop('labelText')).toEqual('Name')
    expect(input.prop('inputType')).toEqual('text')
    expect(input.prop('onChange')).toEqual(onChange)
  })
})
