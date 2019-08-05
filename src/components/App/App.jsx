import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';

import './app.scss';

const App = ({ title }) => (
  <main className="content">
    <h1 className="content__title" data-testid="content__title">
      {title}
    </h1>
  </main>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default hot(App);
