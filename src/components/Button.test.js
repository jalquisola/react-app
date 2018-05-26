import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders without crashing', () => {
  shallow(<Button />);
});

describe('when Button has properties', () => {
  it('renders input with the correct properties', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Button disabled={false} value='test' onClick={onClick} />)
    const input = wrapper.find('input')

    expect(input.length).toEqual(1)
    expect(input.prop('disabled')).toEqual(false)
    expect(input.prop('value')).toEqual('test')
    expect(input.prop('onClick')).toEqual(onClick)
  })
})
