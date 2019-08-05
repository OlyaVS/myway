import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App.jsx';

afterEach(cleanup);

test('correct App title exists in H1', () => {
  const title = `Test title`;
  const { getByTestId } = render(<App title={title} />);

  expect(getByTestId(`content__title`).tagName).toBe(`H1`);
  expect(getByTestId(`content__title`).textContent).toEqual(title);
});
