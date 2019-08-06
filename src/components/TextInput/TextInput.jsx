import React from 'react';
import PropTypes from 'prop-types';

import './textInput.scss';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = { value: '', valid: true };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
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
          required={true}
          value={this.state.value}
          ref={this.textInput}
          onChange={this.handleChange}
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
};

export default TextInput;
