import React, { useEffect, useRef } from 'react'
import '../../assets/styles/NotesComponent.css'
import pinned from '../../assets/styles/pinned.svg'
import archivedown from '../../assets/styles/archive-down.svg'    
const NoteComponent = ({data}) => {

     const editableContentRef = useRef(null);
     const editableTitleRef = useRef(null);

     useEffect(()=>{
          if(data){
               editableContentRef.current.innerText = data?.content || '';
               editableTitleRef.current.innerText = data?.title || '';
          }
     },[data])
  return(
       <div className='NotesparentContainer' style={{backgroundColor:data?.activebackgroundcolor || '',
                                                     backgroundImage:data?.activebackgroundimage ? `url(${data?.activebackgroundimage})` : ''}}>
            <div className="titleContentContainer" 
                 ref={editableTitleRef}
                 ></div>
            <div className="ContentContainer" 
                 ref={editableContentRef}
                 ></div>
            <div className="pinnedbutton">
                    <img src={pinned} alt="pin" />
                 </div>     
            <div className="buttonActionButtonContainer">
               <div className="buttonActionButtonwrapper"><img src={archivedown} alt="archive" /></div>
               <div className="buttonActionButtonwrapper"><i class="fa-solid fa-trash"></i></div>
                    
                 </div>     
       </div>
  )
  
}

export default NoteComponent
