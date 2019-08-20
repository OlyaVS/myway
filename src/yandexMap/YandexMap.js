/* global ymaps */
import { getLastItemCoords, getRouteInCoords } from './utils';
import { ROUTE_OPTIONS } from './constants.js';

export default class YandexMap {
  init(route) {
    ymaps
      .ready()
      .then(() => this.createInstances(route))
      .then(() => this.addRoute(route))
      .catch(error => console.log(error));
  }

  createInstances(route) {
    this.map = new ymaps.Map('map', {
      center: getLastItemCoords(route) || ROUTE_OPTIONS.defaultCenter,
      zoom: 15,
    });
    this.balloonContentLayout = ymaps.templateLayoutFactory.createClass('{{ properties.request }}');
    this.geoObjects = new ymaps.GeoObjectCollection(null);
  }

  addRoute(route) {
    this.multiRouteModel = new ymaps.multiRouter.MultiRouteModel(
      getRouteInCoords(route),
      ROUTE_OPTIONS.multiRouteModel
    );
    this.multiRoute = new ymaps.multiRouter.MultiRoute(
      this.multiRouteModel,
      ROUTE_OPTIONS.multiRoute
    );
    this.map.geoObjects.add(this.multiRoute);
    this.map.setCenter(getLastItemCoords(route));
  }

  update(route) {
    this.map.geoObjects.removeAll();
    this.addRoute(route);
  }
}
