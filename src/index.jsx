import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './store/store';
import Layout from './containers/Layout/Layout';
import './index.css';

const store = configureStore();

// render the app
render(
  <ReduxProvider store={store}>
    <Layout />
  </ReduxProvider>,
  document.getElementById('root')
);
