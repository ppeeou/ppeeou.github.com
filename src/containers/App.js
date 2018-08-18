

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Box,
} from "gestalt";

class App extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <Box position="absolute">
        <div>Hello world</div>
      </Box>
    )
  }
}


export default App;

