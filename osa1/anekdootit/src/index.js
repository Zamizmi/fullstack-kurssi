import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text }) => (<button onClick={handleClick}>
  {text}</button>)

const AnnaAnec = (props) => {
  const tila = props.props.state.selected
    return(
      <h4>{props.props.props.anecdotes[tila].anec}</h4>
    )
  }

  const AnnaParas = (props) => {
    let eka = props.props.anecdotes[0]

    for (var i = 0; i < props.props.anecdotes.length; i++) {
      if (eka.votes < props.props.anecdotes[i].votes) {
        eka = props.props.anecdotes[i]
      }
    }
    return (
      <div>
        <h4>{eka.anec}</h4>
        <p>Has {eka.votes} votes</p>
      </div>
    )
  }

  const Votes = (props) => {
    const tila = props.props.state.selected
    return(
      <p>Votes: {props.props.props.anecdotes[tila].votes}</p>
    )
  }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  vaihdatila = () => {
    this.setState(({selected: Math.floor(Math.random()*5)}))
  }

  vote = () => {
    this.props.anecdotes[this.state.selected].votes +=1
    this.setState(({selected: this.state.selected}))
  }

  render() {
    return (
      <div>
        <AnnaAnec props={this}/>
        <Votes props={this}/>
        <Button handleClick={this.vote} text='Vote'/><br/><br/>
        <Button handleClick={this.vaihdatila} text='Next Anecdote'/>
        <AnnaParas props={this.props}/>
      </div>
    )
  }
}
const anecdotes = [
  {
    anec: 'If it hurts, do it more often',
    votes: 0
  },
  {
    anec: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    anec: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    anec: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    anec: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    anec: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
