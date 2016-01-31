import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducers';
import {getData} from './services/fetch-service';
import {setData} from './action-creators';
import Page from './components';

const store = createStore(reducer);

async function initialize() {

  const data = await getData();

  store.dispatch(setData(data));

}

initialize();

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('app')
);

