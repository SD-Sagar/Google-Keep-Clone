import { configureStore } from "@reduxjs/toolkit"
import createNote from './Slices/notesSlice';
const Store = configureStore({

    reducer:{
        notes:createNote,
    }
})

export default Store;