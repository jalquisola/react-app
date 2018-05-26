import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';
import Button from './Button';

describe('when Welcome has properties', () => {
  it('renders page with the correct properties', () => {
    const logout = jest.fn()
    const wrapper = shallow(<Welcome name='test' logout={logout} />)
    let tag = wrapper.find('h2')

    expect(tag.length).toEqual(1)
    expect(tag.text()).toEqual("Welcome, test!")

    tag = wrapper.find(Button)

    expect(tag.prop('value')).toEqual('Logout')
    expect(tag.prop('onClick')).toEqual(logout)
  })
})
