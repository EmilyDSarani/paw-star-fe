import React, { Component } from 'react';
import { signUp } from '../api-utils';
import { getZodiac } from '../utils.js';
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

      //take the submitted birthday as YYYY-MM-DD and give it to our getSign function
      // const sign = await getSign(this.state.birthday);
      const birthday = this.state.birthday;
      const month = Number(birthday.split('-')[1]);
      const day = Number(birthday.split('-')[2]);

      const sign = getZodiac(month, day);
 
      //store the sign in state, so that we can give to our signUp function
      await this.setState({ sign });

      try {
        const { token } = await signUp(this.state.email, this.state.password, this.state.sign, this.state.zipcode);
        this.props.handleTokenChange(token);
        this.props.handleUserLsData(this.state.sign, this.state.zipcode);
        this.props.history.push('/pets');
      }
      catch (e) {
        this.setState({ error: e.response.body.error });
        this.state.error === 'email and password required' && alert('Please provide both an email and password.');
        this.state.error === 'email already exists' && alert(`This profile already exists. Please go to login instead or create a new user.`);
      }
    }
      
    render() {
      return (
        <div className="signup-container">
          <div className="welcome">
            <h3>Welcome</h3>
            <p>Please provide your information below to enter the Pawstrology universe.</p>
          </div>
          <form className="signup-form" onSubmit={this.handleSignUp}>
            <label>Email
              <input required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type='email' />
            </label>

            <label>Password
              <input required value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type='password' />
            </label>
            <label>Current Zipcode
              <input required value={this.state.zipcode} onChange={(e) => this.setState({ zipcode: e.target.value })} type='zipcode' />
            </label>
            <label>Your Birthday
              <input required value={this.state.birthday} onChange={(e) => this.setState({ birthday: e.target.value })} type='date' />
              <p>(You'll enter your pet information next)</p>
            </label>
            <button>
                Submit
            </button>
          </form>
          
        </div>
      );
    }
}
