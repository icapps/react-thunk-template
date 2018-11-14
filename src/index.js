import 'react-app-polyfill/ie11'; // For IE 11 support
import 'core-js/es7/array'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './redux/createStore';
import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
