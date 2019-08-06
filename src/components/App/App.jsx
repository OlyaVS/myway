import { hot } from 'react-hot-loader/root';
import React from 'react';

import Header from '../Header/Header.jsx';
import Form from '../Form/Form';
import RouteList from '../RouteList/RouteList';
import Map from '../Map/Map';

import './app.scss';

const route = [
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
];

function App() {
  return (
    <main className="content">
      <Header className="content__header" />
      <Form className="content__address-form" />
      <RouteList className="content__route-list" route={route} />
      <Map className="content__map" />
    </main>
  );
}

export default hot(App);
