/* global ymaps */
export function getRouteItemsInCoords(route) {
  return route.map(item => item.coords);
}

export function getLastItemCoords(route) {
  const lastItemIndex = route.length - 1;
  return route[lastItemIndex].coords;
}

export function geocode(address) {
  return ymaps.geocode(address).then(result => {
    const address = result.geoObjects.get(0).properties.get('text');
    const coords = result.geoObjects.get(0).geometry.getCoordinates();
    return { address, coords };
  });
}
