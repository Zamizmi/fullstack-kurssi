import React from 'react'

const Person = ({ person, onClickDelete }) => {
  return (
    <li>{person.name} : {person.number} <button onClick={() => {if(window.confirm('Delete the item?')) {onClickDelete()}}}>Delete</button></li>
  )
}

export default Person
