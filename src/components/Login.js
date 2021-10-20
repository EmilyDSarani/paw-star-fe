import React, { Component } from 'react';
import { logIn } from '../api-utils.js';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  state = {
    password: '',
    email: '',
    sign: '',
    zipcode: '',
    error: ''
  }


  //login submit
  handleLogIn = async e => {
    e.preventDefault();
    try {
      const { token, sign, zipcode } = await logIn(this.state.email, this.state.password);
      this.props.handleTokenChange(token);
      // console.log(sign, zipcode);
      this.props.handleUserLsData(sign, zipcode);
      this.props.history.push('/pawstrology');
    }

    catch (e) {
      this.setState({ error: e.response.body.error });
      this.state.error === 'email and password required' && alert('Please provide both an email and password.');
      this.state.error === 'email or password incorrect' && alert(`Incorrect credentials. Please try again.`);
      console.log(this.state.error);
    }
  }

  render() {
    return (
      <div className="homepage-container">
        <form onSubmit={this.handleLogIn}>
          
          <h2>Login</h2>

          <label>
            Email
            <input 
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"/>
          </label>

          <label>
            Password
            <input 
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"/>
          </label>

          <button>Login</button>
          <p><Link to='/signup'>New here? Create a profile</Link></p>
        </form>
      </div>
    );
  }
}
