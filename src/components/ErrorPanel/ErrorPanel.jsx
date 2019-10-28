import React from 'react';
import PropTypes from 'prop-types';

import './errorPanel.scss';

function ErrorPanel({ error }) {
  return error ? (
    <div className={'error-panel'} data-testid={'error-panel'}>
      <span className={'error-panel__text'}>{error}</span>
    </div>
  ) : null;
}

ErrorPanel.propTypes = {
  error: PropTypes.any.isRequired,
};

export default ErrorPanel;
