import React from 'react';
import PropTypes from 'prop-types';

function SectionHeader(props) {
  return (
    <h2 className={props.className} data-testid="section__title">
      {props.title}
    </h2>
  );
}

SectionHeader.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
