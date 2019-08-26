import React, { useState, useRef } from 'react';

import Button from '../Button/Button.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import TextInput from '../TextInput/TextInput.jsx';
import PropTypes from 'prop-types';
import { geocode } from '../MapYandex/utils.js';

import './form.scss';

const PLACEHOLDER = {
  default: `Enter address`,
  errorGeocoding: `Not found. Try another address.`,
  errorDefault: `Error. Please try again.`,
};

const CUSTOM_ERROR = {
  default: `Please enter an address`,
};

function Form(props) {
  let [address, setAddress] = useState(``);
  let [errorMessage, setErrorMessage] = useState(``);
  let input = useRef();

  const handleMissingValue = () => {
    input.current.input.current.setCustomValidity(CUSTOM_ERROR.default);
    setAddress(``);
    setErrorMessage(``);
  };

  const handleChange = () => {
    const inputValue = input.current.input.current.value;
    const isValueOnlySpaces = inputValue.trim().length < 1;
    setAddress(inputValue);
    setErrorMessage(``);
    isValueOnlySpaces
      ? input.current.input.current.setCustomValidity(CUSTOM_ERROR.default)
      : input.current.input.current.setCustomValidity(``);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const geocodedAddress = await geocode(address);
      props.handleSubmit(geocodedAddress);
      setAddress(``);
      setErrorMessage(``);
    } catch (error) {
      setAddress(``);
      error instanceof TypeError
        ? setErrorMessage(PLACEHOLDER.errorGeocoding)
        : setErrorMessage(PLACEHOLDER.errorDefault);
    }
  };

  return (
    <section className={`${props.className} form`}>
      <SectionHeader className="form__title visually-hidden" title="Address form" />
      <form className="form__body" action="" method="post" onSubmit={handleSubmit}>
        <TextInput
          classNameLabel="form__label visually-hidden"
          classNameInput="form__input"
          error={errorMessage}
          id="address"
          name="address"
          label="address"
          placeholder={errorMessage ? errorMessage : PLACEHOLDER.default}
          value={address}
          onChange={handleChange}
          onInvalid={handleMissingValue}
          ref={input}
        />
        <Button className="form__submit" type="submit" title="submit" value="Add" />
      </form>
    </section>
  );
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
