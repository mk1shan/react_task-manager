import React from 'react'

const SearchBar = ({search,setSearch}) => {
  return (
    <div>
    <input className='input'
    type="text"
    placeholder='search tasks'
    value = {search}
    onChange ={(e)=>setSearch(e.target.value)}
   

    />  
    </div>
  )
}

export default SearchBar
