import React, { Component } from 'react';
import { signUp } from '../api-utils';
export default class SignUp extends Component {
    state = {
      password: '',
      email: '',
      sign: '',
      zipcode: '',
      error: '',
      birthday: ''
     
    }

    handleSignUp = async e => {
      e.preventDefault();
      try {
        const { token } = await signUp(this.state.email, this.state.password, this.state.sign, this.state.zipcode);
        this.props.handleTokenChange(token);
          //fill in redirect to add a pet 

        this.props.history.push('/addpet');
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
          <form className="signup-form" onSubmit={this.handleSignUp}>
            <label>Email
              <input required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type='email' />
            </label>

            <label>Password
              <input required value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type='password' />
            </label>
            <label>Zipcode
              <input required value={this.state.zipcode} onChange={(e) => this.setState({ zipcode: e.target.value })} type='zipcode' />
            </label>
            <label>birthday
              <input required value={this.state.birthday} onChange={(e) => this.setState({ birthday: e.target.value })} type='date' />
            </label>
            <button>
                Submit!
            </button>
          </form>
          
        </div>
      );
    }
}
