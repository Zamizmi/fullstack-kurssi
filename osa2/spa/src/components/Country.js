import React from 'react'

const Country = ({props}) => {
  return(
  <div>
    <p>Name: {props.name}</p>
    <p>Capital: {props.capital}</p>
    <p>Population: {props.population}</p>
    <img src={props.flag} alt={props.name} width={250} height={150} />
  </div>
  )
}

export default Country
