import React from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({handleClick, text }) => (<button onClick={handleClick}>
  {text}</button>)

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }

    kasvata = () => {
      this.setState({counter: this.state.counter + 1})
    }

    nollaa = () => {
    this.setState({counter: 0})
  }

  render() {
    return (
      <div><Display counter={this.state.counter}/>
      <button onClick={this.kasvata}> Click me</button>
      <button onClick = {this.nollaa}>Nollaa</button>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'))
