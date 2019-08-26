import { hot } from 'react-hot-loader/root';
import React from 'react';

import Header from '../Header/Header.jsx';
import FormContainer from '../../containers/FormContainer.js';
import RouteListContainer from '../../containers/RouteListContainer';
import Map from '../Map/Map';

import './app.scss';

function App() {
  return (
    <main className="content">
      <div className="content__wrapper">
        <Header className="content__header" />
        <FormContainer className="content__address-form" />
        <RouteListContainer className="content__route-list" />
      </div>
      <Map className="content__map" />
    </main>
  );
}

export default hot(App);
