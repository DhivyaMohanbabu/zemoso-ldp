/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from './utils/router';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <PagesRouter />
    </BrowserRouter>
  </Provider>
);
