import React from 'react'
import Puhelinluettelo from './components/Puhelinluettelo'
import Notification from './components/Notification'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  render() {


    return (
      <div>
        <Puhelinluettelo/>
        <Notification message={this.state.error}/>

      </div>
    )
  }
}

export default App
