import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';

import './routeListItem.scss';

function RouteListItem(props) {
  return (
    <li className={props.className + ` item`}>
      <p className="item__address">{props.value}</p>
      <Button className="item__delete" type="button" title="delete" value="delete" />
    </li>
  );
}
RouteListItem.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

export default RouteListItem;
