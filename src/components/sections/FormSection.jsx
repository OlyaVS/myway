import React from 'react';
import SectionHeader from './SectionHeader/SectionHeader.jsx';
import PropTypes from 'prop-types';
import FormContainer from '../../containers/FormContainer.js';

function FormSection(props) {
  return (
    <section className={`${props.className} form`}>
      <SectionHeader className="form__title visually-hidden" title="Address form" />
      <FormContainer />
    </section>
  );
}

FormSection.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FormSection;
