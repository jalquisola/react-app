import React from 'react';
import { shallow } from 'enzyme';

import NameInput from './NameInput'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from './Button'
import LoginForm from './LoginForm'

describe('when LoginForm has properties', () => {
  it('renders form with the correct properties', () => {
    const inputChange = jest.fn()
    const createAccount = jest.fn()
    const wrapper = shallow(<LoginForm
      inputChange={inputChange}
      createAccount={createAccount}
      buttonDisabled={false}
    />)

    const arr = [NameInput, EmailInput, PasswordInput]
    arr.map((input) => {
      const inputWrapper = wrapper.find(input)
      expect(inputWrapper.length).toEqual(1)
      expect(inputWrapper.prop('onInputChange')).toEqual(inputChange)
    })

    const buttonWrapper = wrapper.find(Button)
    expect(buttonWrapper.length).toEqual(1)
    expect(buttonWrapper.prop('value')).toEqual('Create Account')
    expect(buttonWrapper.prop('onClick')).toEqual(createAccount)
    expect(buttonWrapper.prop('disabled')).toEqual(false)
  })
})
