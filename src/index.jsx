import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';
import configureStore from './store/index.js';
import { fetchData } from './actions';

const store = configureStore({ route: [] });
store.dispatch(fetchData());

MODE === 'development'
  ? console.log(`welcome to development`)
  : console.log(`welcome to production`);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
