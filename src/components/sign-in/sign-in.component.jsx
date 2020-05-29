import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/button/button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign.in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    // pull these values off the event.target
    const {value, name} = event.target;
    // If form element name is 'email', it sets state of this.state.email
    // If name is 'password' set state of thie.state.password.
    this.setState({ [name]: value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            label='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label style={{display: 'none'}}>Email</label>
          <FormInput 
            name='password' 
            type='password' 
            label='password'
            value={this.state.password}
            handleChange={this.handleChange} 
            required
          />
          <label style={{display: 'none'}}>Password</label>
          <div className="buttons">
            <CustomButton text='Submit Form' type='submit' value='Submit Form'> Sign In </CustomButton>
            <CustomButton text='Submit Form' onClick={signInWithGoogle} isGoogle value='Submit Form'> Sign In With Google </CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;