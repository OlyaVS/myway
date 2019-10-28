import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import RouteListItem from '../RouteListItem/RouteListItem.jsx';

import './routeList.scss';

function RouteList(props) {
  const routeList = props.route;
  return (
    <DndProvider backend={HTML5Backend}>
      <ul className="route__list" data-testid="route__list">
        {routeList.length
          ? routeList.map((item, index) => (
              <RouteListItem
                index={index}
                className="route__list-item"
                key={item.id}
                value={item.address}
                handleDelete={props.handleDelete}
                handleSort={props.handleSort}
              />
            ))
          : null}
      </ul>
    </DndProvider>
  );
}

RouteList.propTypes = {
  route: PropTypes.array.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RouteList;
