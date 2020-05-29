import React from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '', 
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      console.log("Error: ", error.message)
    }

  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput 
            type='text' 
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput 
            type='email' 
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput 
            type='password' 
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput 
            type='password' 
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
            required
          ></FormInput>
          <Button type='submit'>Sign Up</Button>
          
        </form>
      </div>
    );
  }
}

export default SignUp;