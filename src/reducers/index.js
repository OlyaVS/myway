import {
  FETCH_DATA_SUCCESS,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  DRAG_ITEM_SUCCESS,
  SORT_ITEMS__SUCCESS,
} from '../constants/actionTypes.js';

export default function reducer(state = { route: [] }, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return action.payload;
    }

    case ADD_ITEM_SUCCESS:
      return { route: [...state.route, action.payload] };

    case SORT_ITEMS__SUCCESS:
      return { route: action.payload };

    case DRAG_ITEM_SUCCESS:
      return { route: action.payload };

    case DELETE_ITEM_SUCCESS:
      return { route: action.payload };

    default:
      return state;
  }
}