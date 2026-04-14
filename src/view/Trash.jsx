import React from 'react'
import '../assets/styles/trash.css'
import NoteComponent from './components/NoteComponent'
import { useSelector } from 'react-redux';
const Trash = () => {
  const {notes = []} = useSelector((state)=>state.notes);
  return (
    <div className="notesrendercontainer">
         {notes?.filter((ele)=>ele?.label==='trash')?.map((item,index)=>(
            <NoteComponent key={index} data={item} source={'trash'}/>
         ))}   
      </div>
  )
}

export default Trash
