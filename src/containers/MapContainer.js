import { connect } from 'react-redux';
import Map from '../components/Map/map.jsx';

import { dragItem } from '../actions/index';

const mapStateToProps = state => {
  return {
    route: state.route,
  };
};

const mapDispatchToProps = dispatch => ({
  handleDrag: id => dispatch(dragItem(id)),
});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default MapContainer;
