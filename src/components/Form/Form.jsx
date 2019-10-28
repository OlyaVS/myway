import React, { Component } from 'react';

import Button from '../Button/Button.jsx';
import TextInput from '../TextInput/TextInput.jsx';
import PropTypes from 'prop-types';
import { geocode } from '../../yandexMap/utils.js';

import './form.scss';

const PLACEHOLDER = {
  default: `Enter address`,
  errorGeocoding: `Not found. Try another address.`,
  errorDefault: `Error. Please try again.`,
};

const CUSTOM_ERROR = {
  default: `Please enter an address`,
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ``,
      errorMessage: ``,
      disabled: false,
    };
    this.input = React.createRef();
    this.handleMissingValue = this.handleMissingValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCustomValidityMessage = this.setCustomValidityMessage.bind(this);
  }

  handleMissingValue() {
    this.setCustomValidityMessage(CUSTOM_ERROR.default);
    this.setState({
      address: ``,
      errorMessage: ``,
      disabled: true,
    });
  }

  handleChange() {
    const inputValue = this.input.current.input.current.value;
    this.setState({
      address: inputValue,
      errorMessage: ``,
    });
    const isValueOnlySpaces = inputValue.trim().length < 1;
    isValueOnlySpaces
      ? this.setCustomValidityMessage(CUSTOM_ERROR.default)
      : this.setCustomValidityMessage(``);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      disabled: true,
    });

    try {
      const geocodedAddress = await geocode(this.state.address);
      this.props.handleSubmit(geocodedAddress);
      this.setState({
        address: ``,
        errorMessage: ``,
      });
    } catch (error) {
      this.setState({
        address: ``,
        errorMessage:
          error instanceof TypeError ? PLACEHOLDER.errorGeocoding : PLACEHOLDER.errorDefault,
      });
    }

    this.setState({
      disabled: false,
    });
  }

  setCustomValidityMessage(message) {
    this.input.current.input.current.setCustomValidity(message);
  }

  render() {
    return (
      <form
        className="form__body"
        action=""
        method="post"
        onSubmit={this.handleSubmit}
        data-testid="address-form"
      >
        <TextInput
          classNameLabel="form__label visually-hidden"
          classNameInput="form__input"
          error={this.state.errorMessage}
          id="address"
          name="address"
          label="address"
          placeholder={this.state.errorMessage ? this.state.errorMessage : PLACEHOLDER.default}
          value={this.state.address}
          onChange={this.handleChange}
          onInvalid={this.handleMissingValue}
          ref={this.input}
          data-testid="form__input"
        />
        <Button
          className="form__submit"
          type="submit"
          value="Submit address"
          testid="form__button"
          disabled={this.state.disabled}
        />
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
