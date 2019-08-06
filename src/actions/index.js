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

export function fetchData() {
  return {
    type: FETCH_DATA_REQUEST,
  };
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
}

export function fetchDataFailure() {
  return {
    type: FETCH_DATA_FAILURE,
    payload: new Error(),
    error: true,
  };
}

export function addItem() {
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

export function sortItems() {
  return {
    type: SORT_ITEMS_REQUEST,
  };
}

export function sortItemsSuccess(data) {
  return {
    type: SORT_ITEMS__SUCCESS,
    payload: data,
  };
}

export function sortItemsFailure() {
  return {
    type: SORT_ITEMS__FAILURE,
    payload: new Error(),
    error: true,
  };
}
