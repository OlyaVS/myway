import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import PropTypes from 'prop-types';
import YandexMap from '../../yandexMap/YandexMap';
import './map.scss';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //use componentDidUpdate to build map cause state uploades after fetch
  }

  componentDidUpdate() {
    if (!this.map) {
      this.map = new YandexMap();
      this.map.init(this.props.route);
    } else {
      this.map.reset(this.props.route);
    }
  }

  render() {
    return (
      <section className={this.props.className + ` map`}>
        <SectionHeader className="map__title visually-hidden" title="Map" />
        <div className="map__container" id="map"></div>
      </section>
    );
  }
}

Map.propTypes = {
  route: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

export default Map;
