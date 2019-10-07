import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

afterEach(cleanup);

describe('controlled input testing', () => {
  test('renders input', () => {
    const onChangeHandler = jest.fn();
    const onInvalidHandler = jest.fn();

    const { getByTestId } = render(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={``}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );
    expect(getByTestId('form__input')).toBeTruthy();
  });

  test('input gets focus when rendered', () => {
    const onChangeHandler = jest.fn();
    const onInvalidHandler = jest.fn();

    const { getByTestId } = render(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={``}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );
    const input = getByTestId('form__input');
    expect(input.focus).toBeTruthy();
  });

  test('input gets focus when updated', () => {
    const onChangeHandler = jest.fn();
    const onInvalidHandler = jest.fn();

    const { getByTestId, rerender } = render(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={``}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );

    rerender(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={``}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );
    const input = getByTestId('form__input');
    expect(input.focus).toBeTruthy();
  });

  test('updates class name to input--error when geocoding error occurs', () => {
    const onChangeHandler = jest.fn();
    const onInvalidHandler = jest.fn();

    const { getByTestId, rerender } = render(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={``}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );

    rerender(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={`Not found. Try another address.`}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );
    const input = getByTestId('form__input');
    expect(input.className).toContain(`input--error`);
  });

  test('calls onChangeHandler when input value changes', () => {
    const onChangeHandler = jest.fn();
    const onInvalidHandler = jest.fn();

    const { getByTestId } = render(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={``}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );
    const input = getByTestId('form__input');
    fireEvent.change(input, { target: { value: `Omsk` } });
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });

  test('calls onInvalidHandler when invalid event occurs', () => {
    const onChangeHandler = jest.fn();
    const onInvalidHandler = jest.fn();

    const { getByTestId } = render(
      <TextInput
        classNameLabel="form__label visually-hidden"
        classNameInput="form__input"
        error={``}
        id="address"
        name="address"
        label="address"
        placeholder={`Enter address`}
        value={``}
        onChange={onChangeHandler}
        onInvalid={onInvalidHandler}
      />
    );
    const input = getByTestId('form__input');
    fireEvent.invalid(input);
    expect(onInvalidHandler).toHaveBeenCalledTimes(1);
  });
});
