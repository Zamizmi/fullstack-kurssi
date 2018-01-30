import React from 'react'

const Search = ({props}) => {
  return(
    <div>
      <h2>Search</h2>
      <form onSubmit={props.showAll}>
        <input
          value={props.state.filter}
          onChange={props.handleFilterChange}
          placeholder='Search'/>
          <button type='submit' hidden='hidden'>jee</button>
      </form>
  </div>
  )
}

export default Search
