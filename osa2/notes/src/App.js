import React from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNote: 'uusi muistiinpano...',
      showAll: true,
      error: null
    }
  }

  componentWillMount() {
    noteService
      .getAll()
      .then(response => {
        this.setState({ notes: response })
      })
  }

  handleNoteChange = (event) => {
    this.setState({ newNote: event.target.value })
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: this.state.newNote,
      date: new Date(),
      important: Math.random() > 0.5
    }

    noteService
      .create(noteObject)
      .then(newNote => {
        this.setState({
          notes: this.state.notes.concat(newNote),
          newNote: ''
        })
      })
  }

  toggleImportanceOf = (id) => {
    return () => {
      const note = this.state.notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }

      noteService
        .update(id, changedNote)
        .catch(error => {
          this.setState({
            error: `muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`,
            notes: this.state.notes.filter(n => n.id !== id)
          })
          setTimeout(() => {
            this.setState({error: null})
          }, 5000)
        })
        .then(changedNote => {
          const notes = this.state.notes.filter(n => n.id !== id)
          this.setState({
            notes: notes.concat(changedNote)
          })
        })
        .catch(error => {
          this.setState({
            error: `muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`,
            notes: this.state.notes.filter(n => n.id !== id)
          })
          setTimeout(() => {
            this.setState({error: null})
          }, 5000)
        })
    }
  }

  toggleVisible = () => {
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    const notesToShow =
    this.state.showAll ?
      this.state.notes :
      this.state.notes.filter(note => note.important === true)

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'


    return (
      <div>
        <h1>Muistiinpanot</h1>
        <Notification message={this.state.error}/>
        <div>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        </div>
        <ul>
          {notesToShow.map(note =>
            <Note
              key={note.id}
              note={note}
              toggleImportance={this.toggleImportanceOf(note.id)}
            />
          )}
        </ul>

        <form onSubmit={this.addNote}>
          <input
            value={this.state.newNote}
            onChange={this.handleNoteChange}
          />
          <button type="submit">tallenna</button>
        </form>

      </div>
    )
  }
}

export default App
