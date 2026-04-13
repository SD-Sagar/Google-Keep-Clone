import { createSlice } from "@reduxjs/toolkit";
const initialState = {
           notes:[
            // {
            // title:'',
            // content:'',
            // activebackgroundcolor:'',
            // activebackgroundimage:'',
            // label:'notes',
            // }
        ],

}

export const notesSlice = createSlice({
    name:'notes',
    initialState,
    // initialState:{
    //        notes:[{
    //         title:'',
    //         content:'',
    //         activebackgroundcolor:'',
    //         activebackgroundimage:'',
    //         label:'notes',
    //        }]
    // }
    reducers:{
        createNote: (state,action)=>{
            state.notes.push(action.payload);
        }
    }
})

export const {createNote} = notesSlice.actions;
export default notesSlice.reducer;