import * as actions from './index.js';
import * as types from '../constants/actionTypes.js';
import configureMockStore from 'redux-mock-store';
import { cleanup } from '@testing-library/react';
import ERROR_MESSAGES from '../constants/errorMessages';
import thunk from 'redux-thunk';
import axios from 'axios';

jest.mock('axios');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test async action creators', () => {
  afterEach(() => {
    cleanup();
    axios.get.mockClear();
    axios.patch.mockClear();
    axios.put.mockClear();
    axios.post.mockClear();
    axios.delete.mockClear();
  });

  test('creates FETCH_DATA_SUCCESS when fetching route data has been done', async () => {
    const mockedResponse = {
      data: {
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
      },
    };
    const expectedActions = [
      { type: types.FETCH_DATA_REQUEST },
      { type: types.FETCH_DATA_SUCCESS, payload: mockedResponse.data },
    ];
    axios.get.mockResolvedValueOnce(mockedResponse);
    const store = mockStore({ route: [], error: '' });
    const receivedResponse = await store.dispatch(actions.fetchData());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(mockedResponse.data);
  });

  test('creates FETCH_DATA_FAILURE when route data has not been fetched', async () => {
    const expectedActions = [
      { type: types.FETCH_DATA_REQUEST },
      { type: types.FETCH_DATA_FAILURE, payload: ERROR_MESSAGES.fetchData },
    ];
    axios.get.mockRejectedValueOnce(new Error());
    const store = mockStore({ route: [], error: '' });
    const receivedResponse = await store.dispatch(actions.fetchData());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(ERROR_MESSAGES.fetchData);
  });

  test('creates ADD_ITEM_SUCCESS when new route item has been added to the route', async () => {
    const mockedResponse = {
      data: {
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
      },
    };
    axios.post.mockResolvedValueOnce(mockedResponse);
    const expectedActions = [
      { type: types.ADD_ITEM_REQUEST },
      { type: types.ADD_ITEM_SUCCESS, payload: mockedResponse.data },
    ];
    const store = mockStore({
      route: [
        {
          id: 1566498256949,
          address: 'Россия, Омск, улица Ленина, 12',
          coords: [54.9857, 73.374015],
        },
      ],
      error: '',
    });
    const receivedResponse = await store.dispatch(actions.addItem());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(mockedResponse.data);
  });

  test('creates ADD_ITEM_FAILURE when new route item has not been added to the route', async () => {
    const expectedActions = [
      { type: types.ADD_ITEM_REQUEST },
      { type: types.ADD_ITEM_FAILURE, payload: ERROR_MESSAGES.addItem },
    ];
    axios.post.mockRejectedValueOnce(new Error());
    const store = mockStore({ route: [], error: '' });
    const receivedResponse = await store.dispatch(actions.addItem());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(ERROR_MESSAGES.addItem);
  });

  test('creates SORT_ITEMS_SUCCESS when route been sorted using drag and drop route list', async () => {
    const mockedResponse = {
      data: {
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
      },
    };
    axios.put.mockResolvedValueOnce(mockedResponse);
    const expectedActions = [
      { type: types.SORT_ITEMS_REQUEST },
      { type: types.SORT_ITEMS_SUCCESS, payload: mockedResponse.data },
    ];
    const store = mockStore({
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
    });
    const receivedResponse = await store.dispatch(actions.sortItems());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(mockedResponse.data);
  });

  test('creates SORT_ITEMS_FAILURE when new route item has not been added to the route', async () => {
    const expectedActions = [
      { type: types.SORT_ITEMS_REQUEST },
      { type: types.SORT_ITEMS_FAILURE, payload: ERROR_MESSAGES.sortItems },
    ];
    axios.put.mockRejectedValueOnce(new Error());
    const store = mockStore({ route: [], error: '' });
    const receivedResponse = await store.dispatch(actions.sortItems());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(ERROR_MESSAGES.sortItems);
  });

  test('creates DELETE_ITEM_SUCCESS when route item been deleted', async () => {
    const mockedResponse = {
      data: {
        route: [
          {
            id: 1566498256949,
            address: 'Россия, Омск, улица Ленина, 12',
            coords: [54.9857, 73.374015],
          },
        ],
        error: '',
      },
    };
    axios.delete.mockResolvedValueOnce(mockedResponse);
    const expectedActions = [
      { type: types.DELETE_ITEM_REQUEST },
      { type: types.DELETE_ITEM_SUCCESS, payload: mockedResponse.data },
    ];
    const store = mockStore({
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
    });
    const receivedResponse = await store.dispatch(actions.deleteItem());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(mockedResponse.data);
  });

  test('creates DELETE_ITEM_FAILURE when route item was not deleted', async () => {
    const expectedActions = [
      { type: types.DELETE_ITEM_REQUEST },
      { type: types.DELETE_ITEM_FAILURE, payload: ERROR_MESSAGES.deleteItem },
    ];
    axios.delete.mockRejectedValueOnce(new Error());
    const store = mockStore({ route: [], error: '' });
    const receivedResponse = await store.dispatch(actions.deleteItem());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(ERROR_MESSAGES.deleteItem);
  });

  test('creates DRAG_ITEM_SUCCESS when route item was dragged on the map', async () => {
    const mockedResponse = {
      data: {
        route: [
          {
            id: 1566498256949,
            address: 'Россия, Омск, улица Ленина, 12',
            coords: [54.9857, 73.374015],
          },
        ],
        error: '',
      },
    };
    axios.patch.mockResolvedValueOnce(mockedResponse);
    const expectedActions = [
      { type: types.DRAG_ITEM_REQUEST },
      { type: types.DRAG_ITEM_SUCCESS, payload: mockedResponse.data },
    ];
    const store = mockStore({
      route: [
        {
          id: 1566497201733,
          address: 'Россия, Омск, улица Ленина, 5',
          coords: [54.986232, 73.374572],
        },
      ],
      error: '',
    });
    const receivedResponse = await store.dispatch(actions.dragItem());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.patch).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(mockedResponse.data);
  });

  test('creates DRAG_ITEM_FAILURE when route item was not updated after drag', async () => {
    const expectedActions = [
      { type: types.DRAG_ITEM_REQUEST },
      { type: types.DRAG_ITEM_FAILURE, payload: ERROR_MESSAGES.dragItem },
    ];
    axios.patch.mockRejectedValueOnce(new Error());
    const store = mockStore({ route: [], error: '' });
    const receivedResponse = await store.dispatch(actions.dragItem());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual(expectedActions);
    expect(axios.patch).toHaveBeenCalledTimes(1);
    expect(receivedResponse.payload).toEqual(ERROR_MESSAGES.dragItem);
  });
});
