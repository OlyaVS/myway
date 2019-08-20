import React from 'react';
import PropTypes from 'prop-types';

import './textInput.scss';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidUpdate() {
    this.input.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <label className={`${this.props.classNameLabel} label`} htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          className={`${this.props.classNameInput} input`}
          type="text"
          id={this.props.id}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          required={true}
          onChange={this.props.onChange}
          onInvalid={this.props.onInvalid}
          ref={this.input}
        />
      </React.Fragment>
    );
  }
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
  onInvalid: PropTypes.func.isRequired,
};

export default TextInput;
