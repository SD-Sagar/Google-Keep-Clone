import React, { useCallback, useMemo, useState } from 'react'
import '../assets/styles/archive.css'
import { useSelector } from 'react-redux';
import NoteComponent from './components/NoteComponent';
import EditPopup from './components/EditPopup';
const Archive = () => {
   const {notes = [], searchQuery } = useSelector((state)=>state.notes);
      
      const [info, setInfo] = useState({
       editpopup:false,
       selectedNote:null,
      });
   
      const openEditPopup = useCallback((val)=>{
       setInfo((prev)=>({...prev, editpopup:true, selectedNote:val}))
      },[]);
   
      const closeEditPopup = useCallback(()=>{
       setInfo((prev)=>({...prev, editpopup:false, selectedNote:null}))
      },[]);
      
      const archiveData = useMemo(()=>{
         return notes?.filter((ele)=>ele?.label==='archive' && ele?.title?.toLowerCase().includes(searchQuery.toLowerCase()));
      },[notes, searchQuery])
  return (
     <div className="notesrendercontainer">
            {archiveData?.map((ele, index) => (
               <NoteComponent
                  key={index}
                  data={ele}
                  source={"archive"}
                  onClick={openEditPopup}
               />
            ))}
     
            <EditPopup
               open={info?.editpopup}
               onClose={closeEditPopup}
               selectedNote={info?.selectedNote}
            />
         </div>
  )
}

export default Archive
