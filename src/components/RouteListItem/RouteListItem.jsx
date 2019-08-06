import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';

import './routeListItem.scss';

function RouteListItem(props) {
  return (
    <li className={`${props.className} item`}>
      <p className="item__address">{props.value}</p>
      <Button
        className="item__delete"
        type="button"
        title="delete"
        value="delete"
        onClick={props.onClick}
      />
    </li>
  );
}
RouteListItem.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RouteListItem;
