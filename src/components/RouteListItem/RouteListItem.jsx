import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import { useDrag, useDrop } from 'react-dnd';
import itemTypes from '../../constants/itemTypes.js';

import './routeListItem.scss';

function RouteListItem(props) {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      index: props.index,
      type: itemTypes.ITEM,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: itemTypes.ITEM,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      props.handleSort(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      className={`${props.className} item`}
      ref={ref}
      style={{ opacity }}
      data-testid="route__list-item"
    >
      <p className="item__address" data-testid="item__address">
        {props.value}
      </p>
      <Button
        className="item__delete"
        type="button"
        value="delete address"
        onClick={() => props.handleDelete(props.index)}
        testid="item__delete"
      />
    </li>
  );
}
RouteListItem.propTypes = {
  index: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default RouteListItem;
