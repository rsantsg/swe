import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect} from 'react'

/**
 * Search component allows the user enter input into to search a certain item. 
 */ 
const Search = ({handler, search, setSearch, placeholder}) => {
  const [hide, hideSearch] = useState("");
 
  return (
    <form >
        <label htmlFor="header-search">
            <span className="visually-hidden">Search </span>
        </label>
        <input
            type="text"
            placeholder={placeholder}
            value = {search}  
            onChange={event=> setSearch(event.target.value)  }
        />
        <button type="submit">Search</button>
    </form>
  )
}
Search.defaultProps = {
  placeholder : "Search",
  setSearch : "", 
  onSubmit: "",
  search: ""
}
Search.protoTypes = {
  placeholder: PropTypes.string 
}

export default Search