import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import PropTypes from 'prop-types';

import './map.scss';

function Map(props) {
  return (
    <section className={props.className + ` map`}>
      <SectionHeader className="map__title visually-hidden" title="Map" />
      <div className="map__container" id="map"></div>
    </section>
  );
}

Map.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Map;
