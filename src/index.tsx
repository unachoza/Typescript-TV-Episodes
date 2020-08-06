import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { StoreProvider } from './redux/store';
import { Router, RouteComponentProps } from '@reach/router';
import HomePage from './Pages/Homepage';
import FavoritesPage from './Pages/FavoritesPage';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <RouterPage pageComponent={<HomePage />} path="/" />
      <RouterPage pageComponent={<FavoritesPage />} path="/favorites" />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
