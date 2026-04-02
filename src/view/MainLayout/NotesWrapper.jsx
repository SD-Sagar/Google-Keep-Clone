import React from 'react'
import '../../assets/styles/wrapperstyles.css' 
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const NotesWrapper = ({ children }) => {
  return (
    <div className='NotesWrapperParentContainer'>
      <Header/>
      <div className="NotesWrapperContentContainer">
        <SideBar/>
        <div className="ChildrenContentContainer">{children}</div>
      </div>
    </div>
  )
}

export default NotesWrapper
