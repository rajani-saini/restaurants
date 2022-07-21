import React from 'react';
import { render } from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store';
import App from './containers/app';
const target = document.querySelector('#root');
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target,
);
serviceWorker.unregister();
