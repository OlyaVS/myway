import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

function Header({ className }) {
  return (
    <header className={`${className} header`}>
      <div className="header__box">
        <h1 className="header__title" data-testid="header__title">
          MyWay
        </h1>
        <p className="header__tagline">to Explore</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Header;
