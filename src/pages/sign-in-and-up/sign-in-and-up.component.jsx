import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-up.styles.scss';

const SignInAndUp = () => (
  <div className='sign-in-and-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndUp;