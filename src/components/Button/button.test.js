import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';

describe('test button', () => {
  afterEach(cleanup);
  test('onClickHanlder called when button clicked', () => {
    const onClickHandler = jest.fn();

    const { getByTestId } = render(
      <Button
        className={'button'}
        type={'submit'}
        title={'submit'}
        value={'submit'}
        onClick={onClickHandler}
      />
    );
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
