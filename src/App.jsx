import './App.css'
import Home from './view/Home'
import { Routes, Route } from 'react-router-dom'
import NotesWrapper from './view/MainLayout/NotesWrapper'
import Archive from './view/Archive'
import Trash from './view/Trash'

const App = () => {
 

  return (
    <>
      <Routes>
        <Route path='/' element={ <NotesWrapper><Home /></NotesWrapper> } />
        <Route path='/archive' element={ <NotesWrapper><Archive /></NotesWrapper> } />
        <Route path='/trash' element={ <NotesWrapper><Trash /></NotesWrapper> } />
      </Routes>
    </>
  )
}

export default App
