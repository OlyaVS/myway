import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  DRAG_ITEM_SUCCESS,
  DRAG_ITEM_FAILURE,
  SORT_ITEMS_SUCCESS,
  SORT_ITEMS_FAILURE,
} from '../constants/actionTypes.js';

const defaultState = {
  route: [],
  error: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return action.payload;
    }

    case FETCH_DATA_FAILURE: {
      return {
        route: state.route,
        error: action.payload,
      };
    }

    case ADD_ITEM_SUCCESS: {
      return {
        route: action.payload,
        error: '',
      };
    }

    case ADD_ITEM_FAILURE: {
      return {
        route: state.route,
        error: action.payload,
      };
    }

    case SORT_ITEMS_SUCCESS: {
      return {
        route: action.payload,
        error: '',
      };
    }

    case SORT_ITEMS_FAILURE: {
      return {
        route: state.route,
        error: action.payload,
      };
    }

    case DRAG_ITEM_SUCCESS: {
      return {
        route: action.payload,
        error: '',
      };
    }

    case DRAG_ITEM_FAILURE: {
      return {
        route: state.route,
        error: action.payload,
      };
    }

    case DELETE_ITEM_SUCCESS: {
      return {
        route: action.payload,
        error: '',
      };
    }

    case DELETE_ITEM_FAILURE: {
      return {
        route: state.route,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
