import React from 'react';
import { render } from 'react-dom';
import './app.css';

if (module.hot) {
  module.hot.accept();
}

const App = () => <h1>Hello Manten!</h1>;

// render the app
render(<App />, document.getElementById('app'));
