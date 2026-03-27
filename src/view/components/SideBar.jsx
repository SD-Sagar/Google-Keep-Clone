import React from 'react'
import '../../assets/styles/sidebar.css'
const IconMenu = [
    {icon: <i class="fa-regular fa-lightbulb"></i> , Label:'Notes'},
    {icon: <i class="fa-solid fa-box-archive"></i> , Label:'Archive'},
    {icon: <i class="fa-solid fa-trash"></i> , Label:'Trash'},
]

const SideBar = () =>  {
  return (
    <div className='SidebarParentContainer'>
      {IconMenu?.map((item,indx)=>(
        <div className={`MenuIconContainer ${indx === 0 ? 'active' : ''}`} key={indx}>
          <div className='IconContainer'>{item?.icon}</div>
          <div className="IconLabeContainer">{item?.Label}</div>
        </div>
      ))}
    </div>
  )
}

export default SideBar
