import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import PropTypes from 'prop-types';
import MapContainer from '../../containers/MapContainer.js';

function MapSection(props) {
  return (
    <section className={props.className + ` map`}>
      <SectionHeader className="map__title visually-hidden" title="Map" />
      <MapContainer />
    </section>
  );
}

MapSection.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MapSection;
