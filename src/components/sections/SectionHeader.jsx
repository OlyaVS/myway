import React from 'react';
import PropTypes from 'prop-types';

function SectionHeader({ className, title }) {
  return (
    <h2 className={className} data-testid="section__title">
      {title}
    </h2>
  );
}

SectionHeader.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
