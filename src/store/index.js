import { createStore } from 'redux';
import reducer from '../reducers/index.js';
import { devToolsEnhancer } from 'redux-devtools-extension';

const preloadedState = {
  route: [
    {
      id: 1565073526212,
      address: `Россия, Омск, улица Ленина, 25`,
      coords: [54.979077, 73.377932],
    },
    {
      id: 1565073546091,
      address: `Россия, Омск, улица Ленина, 5`,
      coords: [54.986232, 73.374572],
    },
    {
      id: 1565073558635,
      address: `Россия, Омск, улица Дмитриева, 1/2`,
      coords: [54.986599, 73.320727],
    },
  ],
};

const store = createStore(reducer, preloadedState, devToolsEnhancer());

export default store;
