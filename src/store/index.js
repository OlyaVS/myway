import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState) {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
}
