import { connect } from 'react-redux';
import MapYandex from '../components/MapYandex/MapYandex';

import { dragItem } from '../actions/index';

const mapStateToProps = state => {
  return {
    route: state.route,
  };
};

const mapDispatchToProps = dispatch => ({
  handleDrag: (index, data) => dispatch(dragItem(index, data)),
});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapYandex);

export default MapContainer;
