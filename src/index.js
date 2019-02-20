import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
const express = require('express');l
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config()


import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from './store';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();
