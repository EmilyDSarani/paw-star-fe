import React, { Component } from 'react';
import { signUp } from '../api-utils';
export default class SignUp extends Component {
    state = {
      password: '',
      email: '',
      sign: '',
      zipcode: '',
      error: ''
    }

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
      
    render() {
      return (
        <div>
                
        </div>
      );
    }
}
