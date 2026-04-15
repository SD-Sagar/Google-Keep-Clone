import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../../assets/styles/EditPopup.css'
import colorpallate from '../../assets/styles/colorpallate.svg'
import PopOver from './PopOver'
import { useDispatch, useSelector } from 'react-redux'
import {updateNote } from '../../Redux/Slices/notesSlice'


const initialstate = {
        focused:true,
        backgroundOptions:false,
        activebackgroundcolor: null,
        activebackgroundimage: null,
        resetcompletecomponent:false,
      }

const EditPopup = ({open , onClose, selectedNote }) => {
  const {notes = []} = useSelector((state)=>state.notes);
    
  const [info,setInfo] = useState(initialstate)
    // const incomingState = useSelector((state)=>state);
    // console.log(incomingState); 
    const dispatch = useDispatch();
    const editableRef = useRef(null)
    const editableTitleRef = useRef(null)

    // useEffect(()=>{
    //     return ()=>{
    //         handleReset();
    //     }
    // },[])

        // useEffect(()=>{
        //     return ()=>{
        //         if (editableRef.current) {
        //             editableRef.current.innerText = '';
        //         }
        //         if (editableTitleRef.current) {
        //             editableTitleRef.current.innerText = '';
        //         }
        //     }
        // },[])
        
    useEffect(()=>{
        if(selectedNote){
            const {title, content, activebackgroundcolor, activebackgroundimage} = selectedNote || {};
            editableTitleRef.current.innerText = title;
            editableRef.current.innerText = content;

            let requiredInfoObj = {
                activebackgroundcolor: null,
                activebackgroundimage: null,    
            }
            if(activebackgroundcolor){
                requiredInfoObj.activebackgroundcolor = activebackgroundcolor;
            }
            if(activebackgroundimage){
                requiredInfoObj.activebackgroundimage = activebackgroundimage;
            }
            setInfo((prev)=>({...prev, ...requiredInfoObj}))
        }
    },[selectedNote])

    const toggleBackgroundOptions = (val)=>{
        setInfo((prev)=>({...prev,backgroundOptions:val?val:!prev.backgroundOptions}))
    }

     const handlebackgroundoptionchange = (type , val) =>{
        setInfo((prev)=>({
          ...prev,[type]:val
        }))
  }

  const handleReset = useCallback(() => {
                      let index = -1;
                        for(let i=0;i<notes?.length;i++){
                            if(notes?.[i]?.id === selectedNote?.id){
                                index = i;
                                break;
                            }
                        }
                        if(index !== -1){
                            const payload = {
                            ...selectedNote,
                            title:editableTitleRef.current.innerText,
                            content: editableRef.current.innerText,
                            activebackgroundcolor:info?.activebackgroundcolor || "",
                            activebackgroundimage:info?.activebackgroundimage || "",
                           };
                           dispatch(updateNote({index , payload}));
                        }

                      
                    //   dispatch(createNote(payload));  


                        
                        // setInfo((prev)=>({...prev, resetcompletecomponent:true}))
                        
                        editableRef.current.innerText="";
                        editableTitleRef.current.innerText="";
                        setInfo({...initialstate, resetcompletecomponent:true})
                        onClose();
                      },[onClose,notes, editableTitleRef,editableRef,dispatch,selectedNote,info?.activebackgroundcolor,info?.activebackgroundimage])

  const handleresetchanges = useCallback((val)=>{
                        setInfo((prev)=>({...prev, resetcompletecomponent:val}))  
  },[])                   

  return open && <div className='EditPopupParentContainer'>
        <div className="editoverlayContainer" onClick={handleReset}></div>  
     <div className="CreateContentContainer"
          style={{
          backgroundColor: info?.activebackgroundcolor || '',
          backgroundImage: info?.activebackgroundimage? `url(${info.activebackgroundimage})`: 'none'}}>
          {info?.focused &&(
            <div className='titleContentInputContainer'
               ref={editableTitleRef}
               contentEditable='true'
               spellCheck='false'
               aria-multiline='true'    
               role='textbox'
               data-placeholder='Title'>
               </div>
               )}
          <div className='notesContentInputContainer'
               ref={editableRef}
               contentEditable='true'
               spellCheck='false'
               aria-multiline='true'
               role='textbox'
               data-placeholder='Take a note...'
               onFocus={()=>setInfo((prev)=>({...prev,focused:true}))}></div>

               {info?.focused && (<div className="noteFooterContainer" style={{backgroundColor:info.activebackgroundcolor ||'#fff'}}>
                  <div className="coloPallateContainer" onClick={toggleBackgroundOptions}>
                    <img src={colorpallate} alt="Color Palette" />
                  </div>
                   <button className='closeButtonContainer' onClick={handleReset}>Close</button>
               </div>)}
      </div>
      <PopOver open={info?.backgroundOptions} 
               onclose={toggleBackgroundOptions} 
               handlebackgroundoptionchange={handlebackgroundoptionchange}
               resetcompletecomponent={info?.resetcompletecomponent}
               handleresetchanges={handleresetchanges}
               customOuterContainerStyle={{
                bottom:'-101px',
                left:'calc(50% - 225px)',
               }}
               activebackgroundcolor={info?.activebackgroundcolor}
               activebackgroundimage={info?.activebackgroundimage}
               /> 
    </div>
}

export default EditPopup;
