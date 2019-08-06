import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  return (
    <React.Fragment>
      <label className={props.classNameLabel + ` label`} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={props.classNameInput + ` input`}
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={true}
      />
    </React.Fragment>
  );
}

TextInput.propTypes = {
  classNameLabel: PropTypes.string.isRequired,
  classNameInput: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
