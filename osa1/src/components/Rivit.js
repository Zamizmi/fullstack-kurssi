import React from 'react'
import Rivi from './Rivi'
import SummaRivi from './SummaRivi'


const Rivit = (osat)  => {
  return(
    <div>
      {osat.taulu.map(rivi =>
    <Rivi key={rivi.id} rivi={rivi} />
  )}
  <SummaRivi osat={osat}/>
</div>
)
}

export default Rivit
