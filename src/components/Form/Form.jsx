import React, { useState } from 'react';

import Button from '../Button/Button.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import TextInput from '../TextInput/TextInput.jsx';
import PropTypes from 'prop-types';

import './form.scss';

function Form(props) {
  let [address, setAddress] = useState('');

  const handleChange = evt => {
    setAddress(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.handleSubmit(address);
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
