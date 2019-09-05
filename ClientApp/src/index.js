import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider>
      <App />
  </Provider>,
  rootElement);

