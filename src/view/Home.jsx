import React from 'react'
import '../assets/styles/home.css' 
import Header from './components/Header'
import SideBar from './components/SideBar'
const Home = () => {
  return (
    <div className='HomeParentContainer'>
      <Header/>
      <div className="HomeCOntentContainer">
        <SideBar/>
      </div>
    </div>
  )
}

export default Home
