import React, { useCallback, useMemo, useState } from 'react'
import'../assets/styles/home.css'
import CreateComponent from './components/CreateComponent'
import NoteComponent from './components/NoteComponent'
import { useSelector } from 'react-redux'
import EditPopup from './components/EditPopup'

// const dummydata = [
//     {
//        height: '200px',
//        bgcolor: 'red',
//     },
//     {
//        height: '100px',
//        bgcolor: 'yellow',
//     },
//     {
//        height: '20px',
//        bgcolor: 'blue',
//     },
//     {
//        height: '40px',
//        bgcolor: 'green',
//     },
//     {
//        height: '700px',
//        bgcolor: 'black',
//     },
//     {
//        height: '60px',
//        bgcolor: 'pink',
//     },
//     {
//        height: '400px',
//        bgcolor: 'orange',
//     },
//     {
//        height: '10px',
//        bgcolor: 'purple',
//     },
//     {
//        height: '500px',
//        bgcolor: 'brown',
//     },
//     {
//        height: '170px',
//        bgcolor: 'cyan',
//     },
    
// ]

const Home = () => {
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

   // console.log('incomingState',incomingState);

   const pinnedData = useMemo(()=>{
    return notes?.filter((ele)=>ele?.label==='notes' && ele?.pinned && ele?.title?.toLowerCase().includes(searchQuery.toLowerCase()));
   }, [notes, searchQuery])

   const unpinnedData = useMemo(()=>{
    return notes?.filter((ele)=>ele?.label==='notes' && !ele?.pinned && ele?.title?.toLowerCase().includes(searchQuery.toLowerCase()));
   }, [notes, searchQuery])

  return (
    <div className='HomeParentContainer'>
      <CreateComponent/>
      <div>
        {pinnedData?.length?<span className='pinnedtexttitle'>Pinnned</span>:''}
        <div className="notesrendercontainer">
         {pinnedData?.map((item,index)=>(
            <NoteComponent key={index} data={item} source={'notes'} onClick={openEditPopup}/>
         ))}   
      </div>
      </div>
      
      <div>
        {pinnedData && unpinnedData?.length?<span className='pinnedtexttitle'>Others</span>:''}
        <div className="notesrendercontainer">
         {unpinnedData.map((item,index)=>(
            <NoteComponent key={index} data={item} source={'notes'} onClick={openEditPopup}/>
         ))}   
      </div>
      </div>
      <EditPopup open={info?.editpopup} onClose={closeEditPopup} selectedNote={info?.selectedNote}/>
      
    </div>
  )
}

export default Home
