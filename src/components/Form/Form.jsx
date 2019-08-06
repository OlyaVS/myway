import React from 'react';

import Button from '../Button/Button.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import TextInput from '../TextInput/TextInput.jsx';
import PropTypes from 'prop-types';

function Form(props) {
  return (
    <section className={props.className + ` form`}>
      <SectionHeader className="form__title" title="Address form" />
      <form className="form__body" action="" method="post">
        <TextInput
          classNameLabel="form__label"
          classNameInput="form__input"
          id="address"
          name="address"
          label="address"
          placeholder="Enter address"
        />
        <Button className="form__submit" type="submit" title="submit" value="Add" />
      </form>
    </section>
  );
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Form;
