import axios from 'axios';
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
  SORT_ITEMS__SUCCESS,
  SORT_ITEMS__FAILURE,
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
    payload: new Error(),
    error: true,
  };
}

export function fetchData() {
  return function(dispatch) {
    dispatch(fetchDataRequest());
    return axios
      .get('/route')
      .then(response => response.data)
      .then(data => dispatch(fetchDataSuccess(data)))
      .catch(dispatch(fetchDataFailure()));
  };
}

function sortItemsRequest() {
  return {
    type: SORT_ITEMS_REQUEST,
  };
}

function sortItemsSuccess(route) {
  return {
    type: SORT_ITEMS__SUCCESS,
    payload: route,
  };
}

function sortItemsFailure() {
  return {
    type: SORT_ITEMS__FAILURE,
    payload: new Error(),
    error: true,
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

export function addItem(address) {
  console.log(address);

  return {
    type: ADD_ITEM_REQUEST,
  };
}

export function addItemSuccess(item) {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: item,
  };
}

export function addItemFailure() {
  return {
    type: ADD_ITEM_FAILURE,
    payload: new Error(),
    error: true,
  };
}

export function deleteItem() {
  return {
    type: DELETE_ITEM_REQUEST,
  };
}

export function deleteItemSuccess(data) {
  return {
    type: DELETE_ITEM_SUCCESS,
    payload: data,
  };
}

export function deleteItemFailure() {
  return {
    type: DELETE_ITEM_FAILURE,
    payload: new Error(),
    error: true,
  };
}

export function dragItem() {
  return {
    type: DRAG_ITEM_REQUEST,
  };
}

export function dragItemSuccess(data) {
  return {
    type: DRAG_ITEM_SUCCESS,
    payload: data,
  };
}

export function dragItemFailure() {
  return {
    type: DRAG_ITEM_FAILURE,
    payload: new Error(),
    error: true,
  };
}
