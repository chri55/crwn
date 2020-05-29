import React from 'react';

import './button.styles.scss';

// Children are any elements inside, like text.
const Button = ({children, handleSubmit, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default Button;