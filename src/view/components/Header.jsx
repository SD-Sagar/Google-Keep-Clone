import React from 'react'
import '../../assets/styles/header.css'
import SearchBar from './SearchBar';
const Header = () => {
  return (
    <div className='HeaderParentContainer'>
      <div className="MenubarIconCOntainer">
        <i class="fa-solid fa-bars"></i>
      </div>
      <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Keep Image" width={40} height={40} style={{paddingRight:'4px'}} />
      <span className='HeaderTitle'>Keep</span>
      <SearchBar/>
    </div>
  )
}

export default Header;  
