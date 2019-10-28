import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button(props) {
  return (
    <button
      className={`${props.className} button`}
      type={props.type}
      onClick={props.onClick}
      data-testid={props.testid}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
