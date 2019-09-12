import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from "redux";
import {languages} from "../src/store/reducers/languages";

import App from './App';

const reducers = combineReducers({languages});

const store = createStore(reducers);


const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <App />
  </Provider>,
  rootElement);

