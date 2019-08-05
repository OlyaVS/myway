import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App.jsx';

const title = 'React with Webpack and Babel';

MODE === 'development'
  ? console.log(`welcome to development`)
  : console.log(`welcome to production`);

ReactDOM.render(<App title={title} />, document.getElementById('root'));
