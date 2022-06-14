import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import clsx from 'clsx';
import { ReactComponent as Vline } from './vline.svg';

export const Input = ({ inputType, styleType, type, placeholder, ...props }) => (
  <input
    className={clsx(`${inputType || 'lg'}`, styleType, ['form-input'], props.className)}
    type={type || 'text'}
    placeholder={placeholder}
    {...props}
  />
);

export const HalfLeftRound = ({ type, placeholder, ...props }) => (
  <input className="form-input md l-round" type={type || 'text'} placeholder={placeholder} {...props} />
);

export const HalfRightRound = ({ type, placeholder, ...props }) => (
  <input className="form-input md r-round" type={type || 'text'} placeholder={placeholder} {...props} />
);

export const FullRound = (props) => <Input inputType="lg" styleType="full-round" {...props} />;

export const PhoneInput = ({ type, placeholder, ...props }) => (
  <div className="wrapper-phone-input">
    <p className="phone-prefix">+234</p>
    <Vline className="phone-vline" />
    <input
      style={{ paddingLeft: '70px' }}
      className="form-input lg full-round"
      type="tel"
      placeholder={placeholder}
      {...props}
    />
  </div>
);

Input.HalfLeftRound = HalfLeftRound;
Input.HalfRightRound = HalfRightRound;
Input.FullRound = FullRound;
Input.PhoneInput = PhoneInput;

const basePropTypes = {
  inputType: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  styleType: PropTypes.oneOf(['l-round', 'r-round', 'full-round', 'le-round', 're-round']),
  type: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'search', 'url']),
  placeholder: PropTypes.string,
};

Input.propTypes = {
  ...basePropTypes,
};

HalfLeftRound.propTypes = {
  ...basePropTypes,
};

HalfRightRound.propTypes = {
  ...basePropTypes,
};

FullRound.propTypes = {
  ...basePropTypes,
};

PhoneInput.propTypes = {
  ...basePropTypes,
};
