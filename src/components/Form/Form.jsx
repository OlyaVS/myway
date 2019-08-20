import React, { useState, useRef } from 'react';

import Button from '../Button/Button.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import TextInput from '../TextInput/TextInput.jsx';
import PropTypes from 'prop-types';
import { GEOCODE } from '../../yandexMap/utils.js';

import './form.scss';

function Form(props) {
  let [address, setAddress] = useState('');
  let input = useRef();

  const handleMissingValue = () => {
    input.current.input.current.setCustomValidity('Please enter an address');
    setAddress('');
  };

  const handleChange = () => {
    const inputValue = input.current.input.current.value;
    setAddress(inputValue);

    if (inputValue.trim().length < 1) {
      input.current.input.current.setCustomValidity('Please enter an address');
    } else {
      input.current.input.current.setCustomValidity('');
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const geocodedAddress = await GEOCODE.ADDRESS(address);
    props.handleSubmit(geocodedAddress);
    setAddress('');
  };

  return (
    <section className={`${props.className} form`}>
      <SectionHeader className="form__title visually-hidden" title="Address form" />
      <form className="form__body" action="" method="post" onSubmit={handleSubmit}>
        <TextInput
          classNameLabel="form__label visually-hidden"
          classNameInput="form__input"
          id="address"
          name="address"
          label="address"
          placeholder="Enter address"
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
