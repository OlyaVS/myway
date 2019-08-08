import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import RouteListItem from '../RouteListItem/RouteListItem.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';

import './routeList.scss';

function RouteList(props) {
  const routeList = props.route;
  return (
    <DndProvider backend={HTML5Backend}>
      <section className={props.className + ` route`}>
        <SectionHeader className="route__title visually-hidden" title="Route" />
        <ul className="route__list">
          {routeList.map((item, index) => (
            <RouteListItem
              index={index}
              className="route__list-item"
              key={item.id}
              value={item.address}
              handleDelete={props.handleDelete}
              handleSort={props.handleSort}
            />
          ))}
        </ul>
      </section>
    </DndProvider>
  );
}

RouteList.propTypes = {
  className: PropTypes.string.isRequired,
  route: PropTypes.array.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RouteList;
