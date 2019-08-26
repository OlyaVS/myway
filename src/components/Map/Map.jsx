import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import PropTypes from 'prop-types';
import './map.scss';
import MapContainer from '../../containers/MapContainer';

function Map(props) {
  return (
    <section className={props.className + ` map`}>
      <SectionHeader className="map__title visually-hidden" title="Map" />
      <MapContainer />
    </section>
  );
}

Map.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Map;
