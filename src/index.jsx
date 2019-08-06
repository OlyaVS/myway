import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';
import store from './store/index.js';

MODE === 'development'
  ? console.log(`welcome to development`)
  : console.log(`welcome to production`);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
