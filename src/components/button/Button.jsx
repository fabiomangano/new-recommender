import React from 'react';
import style from './Button.Module.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className={style.btn} {...rest}>
      {children}
    </button>
  );
};

export default Button;
