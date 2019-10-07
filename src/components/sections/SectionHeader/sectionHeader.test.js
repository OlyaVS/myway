import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SectionHeader from './SectionHeader';

afterEach(cleanup);

test('correct section title exist in H2', () => {
  const title = `Ваш маршрут:`;
  const className = 'route__title';
  const { getByTestId } = render(<SectionHeader className={className} title={title} />);

  expect(getByTestId(`section__title`).tagName).toBe(`H2`);
  expect(getByTestId(`section__title`).textContent).toEqual(title);
});
