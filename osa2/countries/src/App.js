import React from 'react'
import Countries from './components/Countries'
import Notification from './components/Notification'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <Countries/>
        <br/>
        <Notification message={this.state.error}/>

      </div>
    )
  }
}

export default App
