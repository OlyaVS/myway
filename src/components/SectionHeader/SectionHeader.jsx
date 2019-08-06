import React from 'react';
import PropTypes from 'prop-types';

function SectionHeader(props) {
  return <h2 className={props.className}>{props.title}</h2>;
}

SectionHeader.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
