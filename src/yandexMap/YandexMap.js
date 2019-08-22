/* global ymaps */
import { getLastItemCoords, getRoutePointsInCoords, geocode } from './utils';
import { OPTIONS } from './constants.js';

export default class YandexMap {
  init(routeList) {
    ymaps
      .ready()
      .then(() => {
        this.createMap(routeList);
        const route = this.createRoute(routeList);
        this.addRoute(route);
        this.setMapCenter(routeList);
      })
      .catch(error => console.log(error));
  }

  createMap(routeList) {
    this.map = new ymaps.Map('map', {
      center: getLastItemCoords(routeList) || OPTIONS.map.defaultCenter,
      zoom: OPTIONS.map.zoom,
    });
  }

  createRoute(routeList) {
    const multiRouteModel = new ymaps.multiRouter.MultiRouteModel(
      getRoutePointsInCoords(routeList),
      OPTIONS.multiRouteModel
    );

    const multiRoute = new ymaps.multiRouter.MultiRoute(multiRouteModel, OPTIONS.multiRoute);
    this.addSuccessHandler(multiRoute);
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
      point.options.set({
        balloonContentLayout,
      });
      geocode(point.geometry.getCoordinates()).then(result => {
        point.properties.set('address', result.fullAddress);
      });
    });
  }

  setMapCenter(route) {
    this.map.setCenter(getLastItemCoords(route));
  }

  reset(routeList) {
    this.map.geoObjects.removeAll();
    const route = this.createRoute(routeList);
    this.addRoute(route);
    this.setMapCenter(routeList);
  }
}
