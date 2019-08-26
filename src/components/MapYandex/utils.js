/* global ymaps */
export function getRoutePointsInCoords(route) {
  return route.map(item => item.coords);
}

export function getLastItemCoords(route) {
  const routeInCoords = route.map(item => item.coords);
  return routeInCoords[routeInCoords.length - 1];
}

export function geocode(address) {
  return ymaps.geocode(address).then(result => {
    const fullAddress = result.geoObjects.get(0).properties.get('text');
    const coords = result.geoObjects.get(0).geometry.getCoordinates();
    return { fullAddress, coords };
  });
}
