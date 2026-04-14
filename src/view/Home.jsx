import React from 'react'
import'../assets/styles/home.css'
import CreateComponent from './components/CreateComponent'
import NoteComponent from './components/NoteComponent'
import { useSelector } from 'react-redux'

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
   const {notes = []} = useSelector((state)=>state.notes);
   // console.log('incomingState',incomingState);
   
  return (
    <div className='HomeParentContainer'>
      <CreateComponent/>
      <div className="notesrendercontainer">
         {notes?.filter((ele)=>ele?.label==='notes')?.map((item,index)=>(
            <NoteComponent key={index} data={item} source={'notes'}/>
         ))}   
      </div>
    </div>
  )
}

export default Home
