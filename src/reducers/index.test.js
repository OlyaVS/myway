import reducer from './index.js';
import * as types from '../constants/actionTypes.js';
import ERROR_MESSAGES from '../constants/errorMessages';

describe('main reducer', () => {
  const initialState = { route: [], error: '' };

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle FETCH_DATA_SUCCESS', () => {
    const state = {
      route: [
        {
          id: 1566498256949,
          address: 'Россия, Омск, улица Ленина, 12',
          coords: [54.9857, 73.374015],
        },
        {
          id: 1566497201733,
          address: 'Россия, Омск, улица Ленина, 5',
          coords: [54.986232, 73.374572],
        },
      ],
      error: '',
    };

    expect(
      reducer(initialState, {
        type: types.FETCH_DATA_SUCCESS,
        payload: state,
      })
    ).toEqual(state);
  });

  test('should handle FETCH_DATA_FAILURE', () => {
    const state = { route: [], error: ERROR_MESSAGES.fetchData };

    expect(
      reducer(initialState, {
        type: types.FETCH_DATA_FAILURE,
        payload: ERROR_MESSAGES.fetchData,
      })
    ).toEqual(state);
  });

  test('should handle ADD_ITEM_SUCCESS', () => {
    const state = {
      route: [
        {
          id: 1566498256949,
          address: 'Россия, Омск, улица Ленина, 12',
          coords: [54.9857, 73.374015],
        },
      ],
      error: '',
    };

    expect(
      reducer(initialState, {
        type: types.ADD_ITEM_SUCCESS,
        payload: [
          {
            id: 1566498256949,
            address: 'Россия, Омск, улица Ленина, 12',
            coords: [54.9857, 73.374015],
          },
        ],
      })
    ).toEqual(state);
  });

  test('should handle ADD_ITEM_FAILURE', () => {
    const state = { route: [], error: ERROR_MESSAGES.addItem };

    expect(
      reducer(initialState, {
        type: types.ADD_ITEM_FAILURE,
        payload: ERROR_MESSAGES.addItem,
      })
    ).toEqual(state);
  });

  test('should handle SORT_ITEMS_SUCCESS', () => {
    const state = {
      route: [
        {
          id: 1566497201733,
          address: 'Россия, Омск, улица Ленина, 5',
          coords: [54.986232, 73.374572],
        },
        {
          id: 1566498256949,
          address: 'Россия, Омск, улица Ленина, 12',
          coords: [54.9857, 73.374015],
        },
      ],
      error: '',
    };

    expect(
      reducer(initialState, {
        type: types.SORT_ITEMS_SUCCESS,
        payload: [
          {
            id: 1566497201733,
            address: 'Россия, Омск, улица Ленина, 5',
            coords: [54.986232, 73.374572],
          },
          {
            id: 1566498256949,
            address: 'Россия, Омск, улица Ленина, 12',
            coords: [54.9857, 73.374015],
          },
        ],
      })
    ).toEqual(state);
  });

  test('should handle SORT_ITEMS_FAILURE', () => {
    const state = { route: [], error: ERROR_MESSAGES.sortItems };

    expect(
      reducer(initialState, {
        type: types.SORT_ITEMS_FAILURE,
        payload: ERROR_MESSAGES.sortItems,
      })
    ).toEqual(state);
  });

  test('should handle DRAG_ITEM_SUCCESS', () => {
    const state = {
      route: [
        {
          id: 1566497201733,
          address: 'Россия, Омск, улица Ленина, 5',
          coords: [54.986232, 73.374572],
        },
        {
          id: 1566498256949,
          address: 'Россия, Омск, улица Ленина, 12',
          coords: [54.9857, 73.374015],
        },
      ],
      error: '',
    };

    expect(
      reducer(initialState, {
        type: types.DRAG_ITEM_SUCCESS,
        payload: [
          {
            id: 1566497201733,
            address: 'Россия, Омск, улица Ленина, 5',
            coords: [54.986232, 73.374572],
          },
          {
            id: 1566498256949,
            address: 'Россия, Омск, улица Ленина, 12',
            coords: [54.9857, 73.374015],
          },
        ],
      })
    ).toEqual(state);
  });

  test('should handle DRAG_ITEM_FAILURE', () => {
    const state = { route: [], error: ERROR_MESSAGES.dragItem };

    expect(
      reducer(initialState, {
        type: types.DRAG_ITEM_FAILURE,
        payload: ERROR_MESSAGES.dragItem,
      })
    ).toEqual(state);
  });

  test('should handle DELETE_ITEM_SUCCESS', () => {
    const state = {
      route: [
        {
          id: 1566497201733,
          address: 'Россия, Омск, улица Ленина, 5',
          coords: [54.986232, 73.374572],
        },
        {
          id: 1566498256949,
          address: 'Россия, Омск, улица Ленина, 12',
          coords: [54.9857, 73.374015],
        },
      ],
      error: '',
    };

    expect(
      reducer(initialState, {
        type: types.DELETE_ITEM_SUCCESS,
        payload: [
          {
            id: 1566497201733,
            address: 'Россия, Омск, улица Ленина, 5',
            coords: [54.986232, 73.374572],
          },
          {
            id: 1566498256949,
            address: 'Россия, Омск, улица Ленина, 12',
            coords: [54.9857, 73.374015],
          },
        ],
      })
    ).toEqual(state);
  });

  test('should handle DELETE_ITEM_FAILURE', () => {
    const state = { route: [], error: ERROR_MESSAGES.deleteItem };

    expect(
      reducer(initialState, {
        type: types.DELETE_ITEM_FAILURE,
        payload: ERROR_MESSAGES.deleteItem,
      })
    ).toEqual(state);
  });
});
