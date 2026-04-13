import React, { useCallback, useRef, useState } from 'react'
import '../../assets/styles/CreateComponent.css'
import colorpallate from '../../assets/styles/colorpallate.svg'
import PopOver from './PopOver'
import { useDispatch } from 'react-redux'
import { createNote } from '../../Redux/Slices/notesSlice'


const initialstate = {
        focused:false,
        backgroundOptions:false,
        activebackgroundcolor: null,
        activebackgroundimage: null,
        resetcompletecomponent:false,
      }

function CreateComponent() {
    const [info,setInfo] = useState({initialstate})
    // const incomingState = useSelector((state)=>state);
    // console.log(incomingState); 
    const dispatch = useDispatch();
    const editableRef = useRef(null)
    const editableTitleRef = useRef(null)
    const toggleBackgroundOptions = (val)=>{
        setInfo((prev)=>({...prev,backgroundOptions:val?val:!prev.backgroundOptions}))
    }

     const handlebackgroundoptionchange = (type , val) =>{
        setInfo((prev)=>({
          ...prev,[type]:val
        }))
  }

  const handleReset = useCallback(() => {
          
                      const payload = {
                        title:editableTitleRef.current.innerText,
                        content: editableRef.current.innerText,
                        activebackgroundcolor:info?.activebackgroundcolor || '',
                        activebackgroundimage:info?.activebackgroundimage || '',
                        label:'notes',
                        pinned:false,
                        id:crypto.randomUUID(),
                      };
                      dispatch(createNote(payload));  


                        
                        // setInfo((prev)=>({...prev, resetcompletecomponent:true}))
                        editableRef.current.innerText='';
                        editableTitleRef.current.innerText='';
                        setInfo({...initialstate, resetcompletecomponent:true})
                      },[editableTitleRef,editableRef,dispatch,info?.activebackgroundcolor,info?.activebackgroundimage])

  const handleresetchanges = useCallback((val)=>{
                        setInfo((prev)=>({...prev, resetcompletecomponent:val}))  
  },[])                   

  return (
    <div className='ParentCreateContentContainer'>
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
               handleresetchanges={handleresetchanges}/> 
    </div>
  )
}

export default CreateComponent
