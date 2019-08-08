import { connect } from 'react-redux';
import RouteList from '../components/RouteList/RouteList.jsx';

import { deleteItem, sortItems } from '../actions/index';

const mapStateToProps = state => {
  return {
    route: state.route,
  };
};

const mapDispatchToProps = dispatch => ({
  handleSort: (dragIndex, hoverIndex) => dispatch(sortItems(dragIndex, hoverIndex)),
  handleDelete: index => dispatch(deleteItem(index)),
});

const RouteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteList);

export default RouteListContainer;
