import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import PropTypes from 'prop-types';

function Map(props) {
  return (
    <section className={props.className + ` map`}>
      <SectionHeader className="map__title" title="Map" />
      <div className="map__container" id="map"></div>
    </section>
  );
}

Map.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Map;
