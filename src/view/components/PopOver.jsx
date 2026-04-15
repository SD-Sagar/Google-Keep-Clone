import React, { useEffect, useState } from 'react'
import '../../assets/styles/PopOver.css'
import noimage from '../../assets/styles/noimage.png'

const colors = [
  // {
  //   name: 'white',
  //   value: '#fff'
  // },
  {
    name: 'red',
    value: '#f28b82'
  },
  {
    name: 'orange',
    value: '#fbbc04'
  },
  {
    name: 'yellow',
    value: '#fff475'
  },
  {
    name: 'green',
    value: '#b3e5fc'
  },
  {
    name: 'teal',
    value: '#a7ffeb'
  },
  {
    name: 'blue',
    value: '#cbf0f8'
  },
  {
    name: 'darkblue',
    value: '#aecbfa'
  },
  {
    name: 'purple',
    value: '#d7aefb'
  },
  {
    name: 'pink',
    value: '#f8bbd9'
  },
  {
    name: 'brown',
    value: '#e6c9a8'
  },
]
const images =[
  // {
  //     name: 'image1',
  //     value: 'url(./assets/images/image1.jpg)'
  // },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/grocery_light_thumb_0615.svg'
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/food_light_thumb_0615.svg'
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/music_light_thumb_0615.svg'
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/recipe_light_thumb_0615.svg'
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/notes_light_thumb_0615.svg'
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/places_light_thumb_0615.svg'
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/travel_light_thumb_0615.svg'
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/video_light_thumb_0615.svg '
  },
  {
      name: 'image1',
      value: 'https://www.gstatic.com/keep/backgrounds/celebration_light_thumb_0715.svg'
  },
]

const ColorComponent = ({bgcolor , active , onClick}) => {
  return <div className='ColorComponent' style={{ backgroundColor: bgcolor , border: active ? '2px solid #a140f4' : 'none' }} onClick={onClick}></div>
}
const ImageComponent = ({bgImage , active , onClick}) => {
  return <div className='ImageComponent' style={{ backgroundImage: `url(${bgImage})`, border: active ? '2px solid #a140f4' : 'none' }} onClick={onClick}></div>
}

const initialstate = {
       
             backgroundcolor:null,
             backgroundimage:null,

}

const PopOver = ({ open, onclose ,handlebackgroundoptionchange ,resetcompletecomponent,handleresetchanges , customOuterContainerStyle={}, activebackgroundcolor,activebackgroundimage, }) => {

  const [info,setInfo] = useState({initialstate})

  useEffect(()=>{
    setInfo((prev)=>({
      ...prev,
      backgroundcolor:activebackgroundcolor,
      backgroundimage:activebackgroundimage,
    }));
  },[activebackgroundcolor,activebackgroundimage])
  
  useEffect(()=>{
    if(resetcompletecomponent){
      setInfo(initialstate);
      handleresetchanges(false);
    }
  },[resetcompletecomponent])

  const handleBackgroundcolorClick = (color) =>{
    setInfo((prev)=>({...prev,backgroundcolor:color}));
    handlebackgroundoptionchange('activebackgroundcolor',color);
  }
  const handleBackgroundimageClick = (image) =>{
    setInfo((prev)=>({...prev,backgroundimage:image}));
    handlebackgroundoptionchange('activebackgroundimage',image);
  }
  

  return open && (
    <>
      <div className="overLay" onClick={()=>onclose(false)}></div>
      <div className='PopoverparentContainer' style={{...customOuterContainerStyle}}>
        <div className="popoverColorContainer">
          <div className='dropslash' style={{borderColor:info?.backgroundcolor===null?'#a140f4':''}} onClick={()=>handleBackgroundcolorClick(null)}><i class="fa-solid fa-droplet-slash"></i></div>
           {colors?.map((color,indx)=>(<ColorComponent key={indx} 
                                                       bgcolor={color.value} 
                                                       active={info?.backgroundcolor===color.value}
                                                       onClick={()=>handleBackgroundcolorClick(color.value)} />))}
        </div>
        <hr /> 
        <div className="popeoverImageContainer" >
          <div className="noimage" style={{borderColor:info?.backgroundimage===null?'#a140f4':''}} onClick={()=>handleBackgroundimageClick(null)}><img src={noimage} alt="No Image" /></div>
          {images?.map((image,indx)=>(<ImageComponent key={indx}
                                                       bgImage={image?.value} 
                                                       active={info?.backgroundimage===image?.value} 
                                                       onClick={()=>handleBackgroundimageClick(image?.value)} />))}
        </div>
      </div>
    </> 
  )
}

export default PopOver
