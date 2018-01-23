import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'


const Kurssi = (props) => {
  return(
    <div>
      <Otsikko props={props.props}/>
      <Sisalto props={props.props}/>
    </div>
  )
}


export default Kurssi
