import React from 'react'
import '../assets/styles/archive.css'
import { useSelector } from 'react-redux';
import NoteComponent from './components/NoteComponent';
const Archive = () => {
   const {notes = []} = useSelector((state)=>state.notes);
  return (
     <div className="notesrendercontainer">
         {notes?.filter((ele)=>ele?.label==='archive')?.map((item,index)=>(
            <NoteComponent key={index} data={item} source={'archive'}/>
         ))}   
      </div>
  )
}

export default Archive
