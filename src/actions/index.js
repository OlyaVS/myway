import axios from 'axios';
import ERROR_MESSAGES from '../constants/errorMessages';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  DRAG_ITEM_REQUEST,
  DRAG_ITEM_SUCCESS,
  DRAG_ITEM_FAILURE,
  SORT_ITEMS_REQUEST,
  SORT_ITEMS_SUCCESS,
  SORT_ITEMS_FAILURE,
} from '../constants/actionTypes.js';

function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST,
  };
}

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
}

function fetchDataFailure() {
  return {
    type: FETCH_DATA_FAILURE,
    payload: ERROR_MESSAGES.fetchData,
  };
}

export function fetchData() {
  return function(dispatch) {
    dispatch(fetchDataRequest());
    return axios
      .get('/route')
      .then(response => response.data)
      .then(data => dispatch(fetchDataSuccess(data)))
      .catch(() => dispatch(fetchDataFailure()));
  };
}

function addItemRequest() {
  return {
    type: ADD_ITEM_REQUEST,
  };
}

function addItemSuccess(route) {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: route,
  };
}

function addItemFailure() {
  return {
    type: ADD_ITEM_FAILURE,
    payload: ERROR_MESSAGES.addItem,
  };
}

export function addItem(address) {
  return function(dispatch) {
    dispatch(addItemRequest());
    return axios
      .post('/route', { address })
      .then(response => response.data)
      .then(route => dispatch(addItemSuccess(route)))
      .catch(() => dispatch(addItemFailure()));
  };
}

function sortItemsRequest() {
  return {
    type: SORT_ITEMS_REQUEST,
  };
}

function sortItemsSuccess(route) {
  return {
    type: SORT_ITEMS_SUCCESS,
    payload: route,
  };
}

function sortItemsFailure() {
  return {
    type: SORT_ITEMS_FAILURE,
    payload: ERROR_MESSAGES.sortItems,
  };
}

export function sortItems(dragIndex, hoverIndex) {
  return function(dispatch) {
    dispatch(sortItemsRequest());
    return axios
      .put('/route', { dragIndex, hoverIndex })
      .then(response => response.data)
      .then(route => dispatch(sortItemsSuccess(route)))
      .catch(() => dispatch(sortItemsFailure()));
  };
}

function deleteItemRequest() {
  return {
    type: DELETE_ITEM_REQUEST,
  };
}

function deleteItemSuccess(data) {
  return {
    type: DELETE_ITEM_SUCCESS,
    payload: data,
  };
}

function deleteItemFailure() {
  return {
    type: DELETE_ITEM_FAILURE,
    payload: ERROR_MESSAGES.deleteItem,
  };
}

export function deleteItem(index) {
  return function(dispatch) {
    dispatch(deleteItemRequest());
    return axios
      .delete(`/route/${index}`)
      .then(response => response.data)
      .then(route => dispatch(deleteItemSuccess(route)))
      .catch(() => dispatch(deleteItemFailure()));
  };
}

function dragItemRequest() {
  return {
    type: DRAG_ITEM_REQUEST,
  };
}

function dragItemSuccess(data) {
  return {
    type: DRAG_ITEM_SUCCESS,
    payload: data,
  };
}

function dragItemFailure() {
  return {
    type: DRAG_ITEM_FAILURE,
    payload: ERROR_MESSAGES.dragItem,
  };
}

export function dragItem(index, data) {
  return dispatch => {
    dispatch(dragItemRequest());
    return axios
      .patch(`/route/${index}`, { data })
      .then(response => response.data)
      .then(route => dispatch(dragItemSuccess(route)))
      .catch(() => dispatch(dragItemFailure()));
  };
}
