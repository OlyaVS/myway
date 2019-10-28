import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './map.scss';
import map from '../../yandexMap/yandexMap.js';

class Map extends Component {
  componentDidMount() {
    //componentDidUpdate used to build map, state uploades after fetch
  }

  componentDidUpdate() {
    map.hasLoaded()
      ? map.reset(this.props.route)
      : map.load(this.props.route, this.props.handleDrag);
  }

  render() {
    return <div className="map__container" id="map" data-testid={'map__container'}></div>;
  }
}

Map.propTypes = {
  route: PropTypes.array.isRequired,
  handleDrag: PropTypes.func.isRequired,
};

export default Map;
