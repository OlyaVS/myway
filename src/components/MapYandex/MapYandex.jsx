/* global ymaps */
import { getLastItemCoords, getRoutePointsInCoords, geocode } from './utils';
import { OPTIONS } from './constants.js';
import React from 'react';
import PropTypes from 'prop-types';

class MapYandex extends React.Component {
  componentDidMount() {
    //use componentDidUpdate to build map cause state uploades after fetch
  }

  componentDidUpdate() {
    console.log(this.map);
    if (!this.map) {
      this.init();
    } else {
      this.reset();
    }
  }

  init() {
    ymaps
      .ready()
      .then(() => this.createMap())
      .then(() => {
        if (this.props.route.length) {
          const route = this.createRoute();
          this.addRoute(route);
          this.setMapCenter();
        }
      })
      .catch(error => console.log(error));
  }

  createMap() {
    this.map = new ymaps.Map('map', {
      center: getLastItemCoords(this.props.route) || OPTIONS.map.defaultCenter,
      zoom: OPTIONS.map.zoom,
    });
  }

  createRoute() {
    const multiRouteModel = new ymaps.multiRouter.MultiRouteModel(
      getRoutePointsInCoords(this.props.route),
      OPTIONS.multiRouteModel
    );

    const multiRoute = new ymaps.multiRouter.MultiRoute(multiRouteModel, OPTIONS.multiRoute);
    this.addSuccessHandler(multiRoute);
    this.addDragHandler(multiRoute);
    return multiRoute;
  }

  addRoute(route) {
    this.map.geoObjects.add(route, 0);
  }

  addSuccessHandler(multiRoute) {
    multiRoute.model.events.add('requestsuccess', () =>
      this.setBalloonInfo(multiRoute.getWayPoints())
    );
  }

  setBalloonInfo(waypointsCollection) {
    const balloonContentLayout = ymaps.templateLayoutFactory.createClass('{{ properties.address}}');

    waypointsCollection.each(point => {
      ymaps.geoObject.addon.balloon.get(point);
      point.options.set({ balloonContentLayout });

      geocode(point.geometry.getCoordinates()).then(result => {
        point.properties.set('address', result.fullAddress);
      });
    });
  }

  addDragHandler(multiRoute) {
    multiRoute.editor.start();
    multiRoute.editor.events.add('waypointdragend', evt => {
      this.dragEndHandler(evt);
    });
  }

  dragEndHandler(evt) {
    const index = evt.get('wayPoint').properties.get('index');
    const coords = evt.get('wayPoint').geometry.getCoordinates();

    geocode(coords).then(result => {
      this.props.handleDrag(index, result);
    });
  }

  setMapCenter() {
    this.map.setCenter(getLastItemCoords(this.props.route));
  }

  reset() {
    console.log(this.props.route);
    this.map.geoObjects.removeAll();
    const route = this.createRoute();
    this.addRoute(route);
    this.setMapCenter();
  }

  render() {
    return <div className="map__container" id="map"></div>;
  }
}

MapYandex.propTypes = {
  route: PropTypes.array.isRequired,
  handleDrag: PropTypes.func.isRequired,
};

export default MapYandex;
