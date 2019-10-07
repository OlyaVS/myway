import React from 'react';
import SectionHeader from './SectionHeader/SectionHeader.jsx';
import PropTypes from 'prop-types';
import RouteListContainer from '../../containers/RouteListContainer.js';

function RouteListSection(props) {
  return (
    <section className={props.className + ` route`}>
      <SectionHeader className="route__title visually-hidden" title="Route" />
      <RouteListContainer />
    </section>
  );
}

RouteListSection.propTypes = {
  className: PropTypes.string.isRequired,
};

export default RouteListSection;
