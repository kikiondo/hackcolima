import React from 'react';
import {render} from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'
import * as serviceWorker from './serviceWorker'

import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './shared/routes'


const root = document.getElementById('root')

render(
  <Router>
    <AppRoutes />
  </Router>, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
