import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import RouteListItem from './RouteListItem.jsx';

describe('route list test', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const handleDelete = jest.fn();
    const handleSort = jest.fn();
    const address = 'Россия, Омск, улица Ленина, 25';

    const { getByTestId } = render(<DndProvider backend={HTML5Backend}>
      <RouteListItem
        index={1}
        className={'route__list-item'}
        value={address}
        handleDelete={handleDelete}
        handleSort={handleSort}
      />
    </DndProvider>);

    const routeItem = getByTestId('item__address');
    expect(routeItem.textContent).toEqual(address);
  });

  test('handleDelete is called when delete button is clicked', () => {
    const handleDelete = jest.fn();
    const handleSort = jest.fn();
    const address = 'Россия, Омск, улица Ленина, 25';

    const { getByTestId } = render(<DndProvider backend={HTML5Backend}>
      <RouteListItem
        index={1}
        className={'route__list-item'}
        value={address}
        handleDelete={handleDelete}
        handleSort={handleSort}
      />
    </DndProvider>);


    const deleteButton = getByTestId('item__delete');
    fireEvent.click(deleteButton)
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
