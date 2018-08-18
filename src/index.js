
/*eslint-disable no-undef*/
import 'babel-polyfill'

import './vendors/css/grid.scss'
import './vendors/css/normalize.scss'

// https://github.com/pinterest/gestalt
import 'gestalt/dist/gestalt.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './containers/App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)
