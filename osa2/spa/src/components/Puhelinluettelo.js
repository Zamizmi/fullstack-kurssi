import React from 'react'
import Person from './Person'
import Adder from './Adder'
import Search from './Search'

class Puhelinluettelo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '123',
          id: 1},
        { name: 'Arto Vihavainen',
          number: '123',
          id: 2},
        { name: 'Paavo Väyrynen',
          number: '7',
          id: 3},
        { name: 'Sale',
          number: '6',
          id: 4}
      ],
      newName: '',
      newNumber: '',
      filter: '',
      showAll: true
    }
  }

  handleNameChange = (name) => {
    this.setState({
      newName: name.target.value
     })
  }

  handleNumberChange = (number) => {
    this.setState({
      newNumber: number.target.value
     })
  }

  handleFilterChange = (string) => {
    if(string.target.value){
      this.setState({
        showAll: true
      })
    }
    this.setState({
      filter: string.target.value,
      showAll: false
    })
  }

  addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: this.state.newName,
    number: this.state.newNumber,
    id: this.state.persons.length + 1
  }

  const names = this.state.persons.map((person) =>  person.name)

  if(names.includes(personObject.name)) {
    alert("Name added already!");
  } else {
    const persons = this.state.persons.concat(personObject)
    console.log(persons)
      this.setState({
        persons: persons,
        newName: '',
        newNumber:''
      })
  }
  }

  toggleVisible = () => {
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    let personsToShow =
      this.state.showAll ?
        this.state.persons :
        this.state.persons.filter(person => {
          return(
            person.name.toUpperCase().includes(this.state.filter.toUpperCase())
          )
        })

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Search props={this}/>
        <br/>
        <Adder props={this}/>
        <h2>Numerot</h2>
        {personsToShow.map(person => <Person key={person.id} person={person} />)}
        ...
      </div>
    )
  }
}

export default Puhelinluettelo
