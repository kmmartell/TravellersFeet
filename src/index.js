import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import App from './components/app';
import routes from './routes/routes';
import store from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container-fluid'));
