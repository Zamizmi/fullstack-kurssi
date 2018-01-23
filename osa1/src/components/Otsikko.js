import React from 'react'


const Otsikko = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>{props.props.nimi}</h1>
    </div>
  )
}

export default Otsikko
