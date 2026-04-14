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
        },
        updateNote: (state,action)=>{
            const {index,payload} = action.payload;
            state.notes[index]={...state.notes[index],...payload}
        },
        deletenote:(state,action)=>{
            const {index} = action.payload;
            state.notes?.splice(index,1);
        }
    }
})

export const {createNote,updateNote,deletenote} = notesSlice.actions;
export default notesSlice.reducer;