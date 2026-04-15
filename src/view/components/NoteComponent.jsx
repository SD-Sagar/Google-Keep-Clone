import React, { useCallback, useEffect, useRef } from 'react'
import '../../assets/styles/NotesComponent.css'
import pinned from '../../assets/styles/pinned.svg'
import archivedown from '../../assets/styles/archive-down.svg'    
import archiveup from '../../assets/styles/archive-up.svg'    
import pinneddown from '../../assets/styles/pinned-down.svg'    
import { useDispatch, useSelector } from 'react-redux'
import { deletenote, updateNote } from '../../Redux/Slices/notesSlice'
const NoteComponent = ({data , source , onClick}) => {
     const dispatch = useDispatch();
     const {notes = []} = useSelector((state)=>state.notes);
     const editableContentRef = useRef(null);
     const editableTitleRef = useRef(null);

     useEffect(()=>{
          if(data){
               editableContentRef.current.innerText = data?.content || '';
               editableTitleRef.current.innerText = data?.title || '';
          }
     },[data])
      
     const handleActionButtonClick = useCallback((event,type,value)=>{
          event.stopPropagation();
          const {id} = value;
          let index = -1;
          for(let i=0;i<notes?.length;i++){
               if(notes?.[i]?.id === id){
                    index = i;
                    break;
               }
          }
          if(index === -1){
               return;
          }
          const updatednotesObject = {...value,};
          if(type === 'archive'){
               updatednotesObject.label = 'archive';
          }
          if(type === 'unarchive'){
               updatednotesObject.label = 'notes';
          }
          if(type === 'restore'){
               updatednotesObject.label = 'notes';
          }
          if(type === 'deleteforever'){
               return dispatch(deletenote({index}));
          }
          if(type === 'trash'){
               updatednotesObject.label = 'trash';
          }
          if(type === 'pinned'){
               updatednotesObject.pinned = !updatednotesObject?.pinned;
          }
          dispatch(updateNote({index,payload:updatednotesObject}));   
          // console.log('updatednotesObject',updatednotesObject);
     },[notes]);

     const handleFooterOptions = useCallback(()=>{
          if(source === 'notes'){                                                                                                                                                                                                                                                                      
               return(
                    <>
                         <div className="buttonActionButtonwrapper" onClick={(e)=>handleActionButtonClick(e,'archive',data)}><img src={archivedown} alt="archive" /></div>
                         <div className="buttonActionButtonwrapper" onClick={(e)=>handleActionButtonClick(e,'trash',data)}><i class="fa-solid fa-trash"></i></div>
                    
                    </>
               )
          }
          if(source === 'archive'){
               return(
                    <>
                         <div className="buttonActionButtonwrapper" onClick={(e)=>handleActionButtonClick(e,'unarchive',data)}><img src={archiveup} alt="Unarchive" /></div>
                         <div className="buttonActionButtonwrapper" onClick={(e)=>handleActionButtonClick(e,'trash',data)}><i class="fa-solid fa-trash"></i></div>
                    
                    </>
               )
          }
          if(source === 'trash'){
               return(
                    <>
                         <div className="buttonActionButtonwrapper" onClick={(e)=>handleActionButtonClick(e,'deleteforever',data)}><i class="fa-solid fa-trash"></i></div>
                         <div className="buttonActionButtonwrapper" onClick={(e)=>handleActionButtonClick(e,'restore',data)}><i class="fa-solid fa-trash-arrow-up"></i></div>
                    
                    </>
               )
          }
     },[source])

  return(
       <div className='NotesparentContainer' style={{backgroundColor:data?.activebackgroundcolor || '',
                                                     backgroundImage:data?.activebackgroundimage ? `url(${data?.activebackgroundimage})` : '',backgroundSize:data?.activebackgroundimage?'cover':'',}}
                                             onClick={()=>onClick(data)}>
            <div className="titleContentContainer" 
                 ref={editableTitleRef}
                 ></div>
            <div className="ContentContainer" 
                 ref={editableContentRef}
                 ></div>
            {source==='notes'&&(<div className={`pinnedbutton ${data?.pinned ? 'pinned' : ''}`} onClick={(e)=>handleActionButtonClick(e,'pinned',data)}>
                    <img src={data?.pinned?pinneddown:pinned} alt="pin" />
                 </div>)}    
            <div className="buttonActionButtonContainer">
               {handleFooterOptions(source)}
               {/* <div className="buttonActionButtonwrapper" onClick={()=>handleActionButtonClick('archive',data)}><img src={archivedown} alt="archive" /></div>
               <div className="buttonActionButtonwrapper" onClick={()=>handleActionButtonClick('trash',data)}><i class="fa-solid fa-trash"></i></div>
                     */}
                 </div>     
       </div>
  )
  
}

export default NoteComponent
