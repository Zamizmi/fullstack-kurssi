import React from 'react'


const SummaRivi = (osat) => {
  const tehtavat = osat.osat.taulu.map(rivi => rivi.tehtavia)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return(
    <p>Yhteensä tehtäviä: {tehtavat.reduce(reducer)}</p>
  )
}

export default SummaRivi
