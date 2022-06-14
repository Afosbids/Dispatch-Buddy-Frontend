import PropTypes from 'prop-types';

import './style.css';
import { Text } from '../Text';

const basePropTypes = {
  title: PropTypes.string,
  date: PropTypes.bool,
  dropdown: PropTypes.bool,
};

export const InputDropdown = ({ title, date, dropdown }) => {
  // Code to make input dropdown accept inputs
  let disabled = 'disabled';
  if (!date && !dropdown) disabled = '';

  return (
    <div className="InputDropdown-body">
      <Text text={title} />
      <div className="InputDropdown-input">
        {date ? <i className="fa-regular fa-calendar" /> : ''}
        {dropdown ? <i className="fa fa-chevron-down" /> : ''}
        <input type="text" disabled={disabled} />
      </div>
    </div>
  );
};

InputDropdown.propTypes = {
  ...basePropTypes,
};
