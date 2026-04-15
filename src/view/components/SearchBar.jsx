import React, { useEffect, useState } from 'react'
import '../../assets/styles/Searchbar.css'
import { useDispatch } from 'react-redux';
import { updateSearchQuery } from '../../Redux/Slices/notesSlice';

const   SearchBar = () =>  {
    const [searchQuery , setSearchQuery] = useState(''); 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateSearchQuery(searchQuery));
    },[searchQuery,dispatch])

    const handleInputChange = (e)=>{
        setSearchQuery(e.target.value);
    };

    const handleReset = ()=>{
        setSearchQuery('');
    };

  return (
    <div className='SearchbarParentContainer'>
        <div className="SearchIconContainer">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" placeholder="Search..." className='SearchBarInput' value={searchQuery} onChange={handleInputChange}/>
        <div className="SearchIconContainer">
            <i class="fa-solid fa-xmark" onClick={handleReset}></i>
        </div>
    </div>
  )
}

export default SearchBar
