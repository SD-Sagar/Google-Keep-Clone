import React, { useEffect, useState } from 'react'
import '../../assets/styles/sidebar.css'
import { useLocation, useNavigate } from 'react-router-dom'
const IconMenu = [
    {icon: <i class="fa-regular fa-lightbulb"></i> , Label:'Notes',id:'notes'},
    {icon: <i class="fa-solid fa-box-archive"></i> , Label:'Archive',id:'archive'},
    {icon: <i class="fa-solid fa-trash"></i> , Label:'Trash',id:'trash'},
]

const mapper = {
  '/':'notes',
  '/archive':'archive',
  '/trash':'trash',
}
const SideBar = () =>  {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab,setActiveTab] = useState('notes')

  useEffect(()=>{
    setActiveTab(mapper[location.pathname])
  },[location.pathname]);

  const handleNavigation = (type) => {
    if (type === 'notes'){
      navigate('/')
    }
      else if (type === 'archive'){
      navigate('/archive')
    }
    else if (type === 'trash'){
      navigate('/trash')  
    }
  }
  return (
    <div className='SidebarParentContainer'>
      {IconMenu?.map((item,indx)=>(
        <div className={`MenuIconContainer ${activeTab === item.id ? 'active' : ''}`} key={indx} onClick={() => handleNavigation(item?.Label.toLowerCase())}>
          <div className='IconContainer'>{item?.icon}</div>
          <div className="IconLabelContainer">{item?.Label}</div>
        </div>
      ))}
    </div>
  )
}

export default SideBar
