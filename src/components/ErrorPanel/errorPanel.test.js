import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ErrorPanel from './ErrorPanel';

describe('Error panel', () => {
  afterEach(cleanup);

  test('Does not exist when no error', () => {
    const { container } = render(<ErrorPanel error={false} className={'error-panel'} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Renders with error message when error occurs', () => {
    const routeError = 'Address was not added. Please try agan.';
    const { getByTestId } = render(<ErrorPanel error={routeError} className={'error-panel'} />);
    const errorPanel = getByTestId('error-panel');
    expect(errorPanel.textContent).toEqual(routeError);
  });
});
