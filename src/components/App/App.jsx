import { hot } from 'react-hot-loader/root';
import React from 'react';

import Header from '../Header/Header.jsx';
import FormSection from '../sections/FormSection.jsx';
import RouteListSection from '../sections/RouteListSection.jsx';
import MapSection from '../sections/MapSection.jsx';

import './app.scss';

function App() {
  return (
    <main className="content" data-testid={`content`}>
      <div className="content__wrapper">
        <Header className="content__header" />
        <FormSection className="content__address-form" />
        <RouteListSection className="content__route-list" />
      </div>
      <MapSection className="content__map" />
    </main>
  );
}

export default hot(App);
