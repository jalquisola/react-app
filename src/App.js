import React, { Component } from 'react';
import './App.css';

import Welcome from './components/Welcome'
import LoginForm from './components/LoginForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.onCreateAccount = this.onCreateAccount.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {loggedIn: false}
  }

  logout () {
    this.setState({loggedIn: false})
  }

  onCreateAccount () {
    this.setState({loggedIn: true})
  }

  onInputChange (key, value) {
    this.setState({[key]: value})
  }

  buttonEnable () {
    return this.state.name && this.state.password && this.state.email
  }

  render() {
    return (
      <div className="app">
        {
          this.state.loggedIn
            ? <Welcome name={this.state.name} logout={this.logout} />
            : <LoginForm
                inputChange={this.onInputChange}
                createAccount={this.onCreateAccount}
                buttonDisabled={!this.buttonEnable()}
              />
        }
      </div>
    );
  }
}

export default App;
