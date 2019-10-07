import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RouteList from './RouteList.jsx';

describe('route list test', () => {
  afterEach(cleanup);

  test('route list does not exist when there is no route items', () => {
    const handleSort = jest.fn();
    const handleDelete = jest.fn();

    const { getByTestId, queryAllByTestId } = render(
      <RouteList route={[]} handleSort={handleSort} handleDelete={handleDelete} />
    );

    expect(getByTestId('route__list')).toBeTruthy();
    expect(queryAllByTestId('route__list-item').length).toBe(0);
  });

  test('route list rendered when there are route items', () => {
    const handleSort = jest.fn();
    const handleDelete = jest.fn();
    const mockedRouteData = [
      {
        id: 1570439616733,
        address: 'Россия, Омск, улица Ленина, 25',
        coords: [54.979077, 73.377932],
      },
      {
        id: 1570439619087,
        address: 'Россия, Омск, улица Ленина, 5',
        coords: [54.986232, 73.374572],
      },
      {
        id: 1570439623917,
        address: 'Россия, Омск, улица Ленина, 1',
        coords: [54.989641, 73.3692],
      },
    ];

    const { getByTestId, queryAllByTestId } = render(
      <RouteList route={mockedRouteData} handleSort={handleSort} handleDelete={handleDelete} />
    );

    expect(getByTestId('route__list')).toBeTruthy();
    expect(queryAllByTestId('route__list-item').length).toBe(mockedRouteData.length);
  });
});
