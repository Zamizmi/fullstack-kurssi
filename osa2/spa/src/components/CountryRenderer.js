import React from 'react'
import Country from './Country'

const CountryRenderer = ({props}) => {
    let countriesToShow = []
    let countriesFiltered = props.state.countries.filter(country => {
            return(country.name.toUpperCase().includes(props.state.filter.toUpperCase()))
          })
    if (countriesFiltered.length===1) {
          return(
            <div>
              <h1>Country</h1>
              {countriesFiltered.map(country => <Country key={country.name} props={country}/>)}
            </div>
          )

        } else if(countriesFiltered.length<10) {
          return(
            <div>
              <h1>Country</h1>
              {countriesFiltered.map(country => {
                return(
                  <div onClick={props.handleShowOneChange} key={country.name}>
                    <p key={country.name}>{country.name}</p>
                  </div>
                )})}
              </div>
            )
          } else {
            return(
              <div>
                <h1>Country</h1>
                <p>Too many matches, specify another filter!</p>
                {countriesToShow.map(country => <Country key={country.name} props={country}/>)}
              </div>
            )
          }
      }

export default CountryRenderer
