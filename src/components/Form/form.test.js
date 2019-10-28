import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Form from './Form.jsx';

describe('form testing', () => {
  afterEach(cleanup);

  test('renders form with input field and submit button', () => {
    const handleSubmit = jest.fn();

    const { getByTestId, container } = render(<Form handleSubmit={handleSubmit} />);

    const form = getByTestId('address-form');
    const input = getByTestId('form__input');
    const submitButton = getByTestId('form__button');

    expect(form).toBeTruthy();
    expect(form.tagName).toBe('FORM');
    expect(input.tagName).toBe('INPUT');
    expect(submitButton.tagName).toBe('BUTTON');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('handleChange is called when user types address', () => {
    const handleChange = jest.spyOn(Form.prototype, 'handleChange');
    const handleSubmitProp = jest.fn();

    const { getByTestId } = render(<Form handleSubmit={handleSubmitProp} />);
    const input = getByTestId('form__input');

    fireEvent.change(input, {
      target: {
        value: 'O',
      },
    });

    expect(Form.prototype.handleChange).toHaveBeenCalledTimes(1);
    handleChange.mockClear();
  });

  test('handleSubmit is called when form is submitted', () => {
    const handleChange = jest.spyOn(Form.prototype, 'handleChange');
    const handleSubmit = jest.spyOn(Form.prototype, 'handleSubmit');

    const { getByTestId } = render(<Form handleSubmit={jest.fn()} />);
    const form = getByTestId('address-form');
    const input = getByTestId('form__input');

    fireEvent.change(input, {
      target: {
        value: 'Omsk',
      },
    });

    expect(Form.prototype.handleChange).toHaveBeenCalledTimes(1);
    fireEvent.submit(form);

    expect(Form.prototype.handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  test('handleMissingValue is called when invalid value is submitted', () => {
    const handleMissingValue = jest.spyOn(Form.prototype, 'handleMissingValue');
    const handleSubmitProp = jest.fn();

    const { getByTestId } = render(<Form handleSubmit={handleSubmitProp} />);
    const input = getByTestId('form__input');

    fireEvent.invalid(input);

    expect(Form.prototype.handleMissingValue).toHaveBeenCalledTimes(1);
    handleMissingValue.mockClear();
  });
});
