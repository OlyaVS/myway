import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button(props) {
  return (
    <button className={`${props.className} button`} type={props.type} title={props.type}>
      {props.value}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
