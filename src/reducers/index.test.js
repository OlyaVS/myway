import reducer from './index.js';
import * as types from '../constants/actionTypes.js';

describe('main reducer', () => {
  test('should return the initial state', () => {
    const initialState = { route: [] };
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
    };

    expect(
      reducer([], {
        type: types.FETCH_DATA_SUCCESS,
        payload: state,
      })
    ).toEqual(state);
  });

  test('should handle FETCH_DATA_FAILURE', () => {
    const state = {
      route: [],
    };

    expect(
      reducer([], {
        type: types.FETCH_DATA_FAILURE,
        payload: [],
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
        {
          id: 1566497201733,
          address: 'Россия, Омск, улица Ленина, 5',
          coords: [54.986232, 73.374572],
        },
      ],
    };

    expect(
      reducer([], {
        type: types.ADD_ITEM_SUCCESS,
        payload: [
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
    };

    expect(
      reducer([], {
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
    };

    expect(
      reducer([], {
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
    };

    expect(
      reducer([], {
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
});
