/* global ymaps */
export function getRouteInCoords(route) {
  return route.map(item => item.coords);
}

export function getLastItemCoords(route) {
  const routeInCoords = route.map(item => item.coords);
  return routeInCoords[routeInCoords.length - 1];
}

export const GEOCODE = {
  ADDRESS(address) {
    return ymaps.geocode(address).then(result => {
      const fullAddress = result.geoObjects.get(0).properties.get('text');
      const coords = result.geoObjects.get(0).geometry.getCoordinates();
      return { fullAddress, coords };
    });
  },

  COORDS(coords) {
    return ymaps
      .geocode(coords)
      .then(result => {
        const fullAddress = result.geoObjects.get(0).properties.get('text');
        const shortAddress = result.geoObjects.get(0).properties.get('name');
        return { fullAddress, shortAddress };
      })
      .catch(err => console.log(err));
  },
};
