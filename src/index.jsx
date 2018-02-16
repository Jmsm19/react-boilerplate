import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './store/store';
import App from './containers/App/App';
import './index.css';

const store = configureStore();

// render the app
render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
);
