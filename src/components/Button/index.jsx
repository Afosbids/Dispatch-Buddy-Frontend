import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './style.css';

export const Button = ({ text, btnType, className, btnStyle, stretch, round, children, ...props }) => (
  <button
    className={clsx(`button-base ${btnType || 'primary'}`, [
      { stretch, round, 'round-secondary': round && btnType === 'secondary' },
      className,
      btnStyle,
    ])}
    type="button"
    {...props}
  >
    {text || children}
  </button>
);



Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  stretch: PropTypes.bool,
  round: PropTypes.bool,
  btnStyle: PropTypes.string, // deprecated - do not use
  className: PropTypes.string,
};
