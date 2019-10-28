import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header.jsx';

test('Header title exists in H1', () => {
  const { getByTestId } = render(<Header className="header" />);
  expect(getByTestId(`header__title`).tagName).toBe(`H1`);
});
