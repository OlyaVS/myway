/* global ymaps */
import { getLastItemCoords, getRouteItemsInCoords, geocode } from './utils';
import { OPTIONS } from './constants.js';

class yandexMap {
  hasLoaded() {
    return this.map ? true : false;
  }

  load(routeList, handleDrag) {
    this.handleDrag = handleDrag;

    ymaps
      .ready()
      .then(() => this._loadMap(routeList))
      .then(() => this._addRoute(routeList))
      .catch(error => console.log(error));
  }

  reset(routeList) {
    this._clearMap();
    this._setMapCenter(routeList);
    this._addRoute(routeList);
  }

  _clearMap() {
    this.map.geoObjects.removeAll();
  }

  _loadMap(routeList) {
    const center = this._getMapCenter(routeList);

    this.map = new ymaps.Map('map', {
      center: center,
      zoom: OPTIONS.map.zoom,
    });
  }

  _getMapCenter(routeList) {
    return routeList.length ? getLastItemCoords(routeList) : OPTIONS.map.defaultCenter;
  }

  _setMapCenter(routeList) {
    const center = this._getMapCenter(routeList);
    this.map.setCenter(center);
  }

  _addRoute(routeList) {
    if (routeList.length) {
      const multiRouteModel = new ymaps.multiRouter.MultiRouteModel(
        getRouteItemsInCoords(routeList),
        OPTIONS.multiRouteModel
      );

      const multiRoute = new ymaps.multiRouter.MultiRoute(multiRouteModel, OPTIONS.multiRoute);
      this._addSuccessHandler(multiRoute);
      this._addDragHandler(multiRoute);
      this.map.geoObjects.add(multiRoute, 0);
    }
  }

  _addSuccessHandler(multiRoute) {
    multiRoute.model.events.add('requestsuccess', () =>
      this._setBalloonInfo(multiRoute.getWayPoints())
    );
  }

  _setBalloonInfo(waypointsCollection) {
    const balloonContentLayout = ymaps.templateLayoutFactory.createClass('{{ properties.address}}');

    waypointsCollection.each(point => {
      ymaps.geoObject.addon.balloon.get(point);
      point.options.set({ balloonContentLayout });

      geocode(point.geometry.getCoordinates()).then(result => {
        point.properties.set('address', result.address);
      });
    });
  }

  _addDragHandler(multiRoute) {
    multiRoute.editor.start();
    multiRoute.editor.events.add('waypointdragend', evt => {
      this._dragEndHandler(evt);
    });
  }

  _dragEndHandler(evt) {
    const index = evt.get('wayPoint').properties.get('index');
    const coords = evt.get('wayPoint').geometry.getCoordinates();

    geocode(coords).then(result => {
      this.handleDrag(index, result);
    });
  }
}

const map = new yandexMap();
export default map;
