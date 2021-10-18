import React, { Component } from 'react';
import { signUp, logIn } from '../api-utils.js';

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
      //fill in redirect to gallery 
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
      <div>
        <form>
          
        </form>
                
      </div>
    );
  }
}
