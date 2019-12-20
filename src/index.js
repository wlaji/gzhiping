import React from 'react'
import ReactDOM from 'react-dom'
import Route from './router/index'
import * as serviceWorker from './serviceWorker'
import FastClick from 'fastclick'
import {Provider} from 'react-redux'
import store from './redux/store'
import './assets/style/public.css'

FastClick.attach(document.body);
ReactDOM.render((
  <Provider store={store}>
     <Route />
  </Provider>
  ),document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
