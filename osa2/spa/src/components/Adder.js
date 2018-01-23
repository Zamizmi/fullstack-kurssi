import React from 'react'

const Adder = ({props}) => {

  return(
    <div>
    <form onSubmit={props.addPerson}>
      <input
        value={props.state.newName}
        onChange={props.handleNameChange}
        placeholder="Name"
      />
      <br/>
      <input
        value={props.state.newNumber}
        onChange={props.handleNumberChange}
        placeholder="Number"
      />
      <br/>
      <br/>
      <button type="submit">Add Person</button>
    </form>
  </div>
  )

}

export default Adder
