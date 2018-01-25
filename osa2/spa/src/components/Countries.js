import React from 'react'
import CountryRenderer from './CountryRenderer'
import Search from './Search'
import axios from 'axios'

class Countries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: '',
      show: true
    }
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  handleFilterChange = (string) => {
    if(string.target.value){
      this.setState({
        show: false,
        showOne: null
      })
    }
    this.setState({
      filter: string.target.value,
      show: false,
      showOne: null
    })
  }

  handleShowOneChange = (show) => {
    let newShow= show.target.innerHTML
    this.setState({
      filter: newShow
    })
  }

  render() {
    return(
      <div>
        <Search props={this}/>
        <CountryRenderer props={this}/>
      </div>
    )
      }
    }

export default Countries
