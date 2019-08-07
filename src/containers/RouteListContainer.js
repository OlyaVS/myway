import { connect } from 'react-redux';
import RouteList from '../components/RouteList/RouteList.jsx';

import { deleteItem, sortItems } from '../actions/index';

const mapStateToProps = state => {
  return {
    route: state.route,
  };
};

const mapDispatchToProps = dispatch => ({
  handleSort: props => dispatch(sortItems(props)),
  handleDelete: id => dispatch(deleteItem(id)),
});

const RouteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteList);

export default RouteListContainer;
