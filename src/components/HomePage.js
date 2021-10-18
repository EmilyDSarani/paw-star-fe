import React, { Component } from 'react';
import { signUp, logIn } from '../api-utils.js';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  state = {
    password: '',
    email: '',
    sign: '',
    zipcode: '',
    error: ''
  }

  //signup submit - need to add actions for adding PS user data (user profile) <--MOVE THIS TO SEPARATE SIGNUP/CREATE USER PAGE
  handleSignUp = async e => {
    e.preventDefault();
    try {
      const { token } = await signUp(this.state.email, this.state.password, this.state.sign, this.state.zipcode);
      this.props.handleTokenChange(token);
      //fill in redirect to add a pet 
    }
    catch (e) {
      this.setState({ error: e.response.body.error });
      this.state.error === 'email and password required' && alert('Please provide both an email and password.');
      this.state.error === 'email already exists' && alert(`This profile already exists. Please go to login instead or create a new user.`);
      console.log(this.state.error);
    }
  }

  //login submit
  handleLogIn = async e => {
    e.preventDefault();
    try {
      const { token } = await logIn(this.state.email, this.state.password);
      this.props.handleTokenChange(token);
      this.props.history.push('/gallery');
    }

    catch (e) {
      this.setState({ error: e.response.body.error });
      this.state.error === 'email and password required' && alert('Please provide both an email and password.');
      this.state.error === 'email or password incorrect' && alert(`Incorrect credentials. Please try again.`);
      console.log(this.state.error);
    }
  }


  //ADD LOGIN FORM WITH NOTE - new here? create your profile (link to sign up page)
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
          <Link to='/signup'>New here? Create a profile</Link>
        </form>
      </div>
    );
  }
}
