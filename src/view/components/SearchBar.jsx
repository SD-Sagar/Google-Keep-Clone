import React, { useState } from 'react'
import '../../assets/styles/Searchbar.css'

const SearchBar = () =>  {
    const [searchQuery , setSearchQuery] = useState(''); 
  return (
    <div className='SearchbarParentContainer'>
        <div className="SearchIconContainer">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" placeholder="Search..." className='SearchBarInput' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <div className="SearchIconContainer">
            <i class="fa-solid fa-xmark" onClick={()=>setSearchQuery('')}></i>
        </div>
    </div>
  )
}

export default SearchBar
