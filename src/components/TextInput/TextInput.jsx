import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './textInput.scss';

function TextInput(props) {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <React.Fragment>
      <label className={`${props.classNameLabel} label`} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={`${props.classNameInput} input`}
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={true}
        value={props.value}
        onChange={props.onChange}
        ref={input}
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
