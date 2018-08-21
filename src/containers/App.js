
import React, { Component } from 'react'
import Loading from '../components/Loading';
import Button from '../components/Button';

class App extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div position="absolute">
        <div>Hello world</div>
        <Loading isText={false} />
        <Button type="prior">gadsgdsgsdfasd</Button>
      </div>
    )
  }
}


export default App;

