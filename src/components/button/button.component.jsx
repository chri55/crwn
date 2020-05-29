import React from 'react';

import './button.styles.scss';

// Children are any elements inside, like text.
const Button = ({children, isGoogle, handleSubmit, ...otherProps}) => (
  <button className={`${isGoogle ? 'google-button' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default Button;