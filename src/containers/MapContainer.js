import { connect } from 'react-redux';
import Map from '../components/Map/Map';

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
)(Map);

export default MapContainer;
