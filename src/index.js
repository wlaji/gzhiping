import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index';
import * as serviceWorker from './serviceWorker';
import './style/public.css';
import FastClick from 'fastclick';
FastClick.attach(document.body);
ReactDOM.render(<Route />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
