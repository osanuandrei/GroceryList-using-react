import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchform' onSubmit={(e) => e.preventDefault}>
        <label htmlFor='Search'>
            Search
        </label>
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        id = 'search'
        role='searchbox'
        placeholder='search item'>

        </input>


    </form>
  )
}

export default SearchItem
