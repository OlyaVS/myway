import React from 'react';
import PropTypes from 'prop-types';

import RouteListItem from '../RouteListItem/RouteListItem.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';

function RouteList(props) {
  const routeList = props.route;
  return (
    <section className={props.className + ` route`}>
      <SectionHeader className="route__title" title="Route" />
      <ul className="route__list list">
        {routeList.map(item => (
          <RouteListItem className="list__item" key={item.id} value={item.address} />
        ))}
      </ul>
    </section>
  );
}

RouteList.propTypes = {
  className: PropTypes.string.isRequired,
  route: PropTypes.arrayOf(PropTypes.object),
};

export default RouteList;
