import React, { useRef, useState } from 'react'
import Videofooter from './componentes/footer/Videofooter'
import VideoSidebar from "./componentes/sidebar/VideoSidebar"
import "./video.css"

function Video({likes, messages, shares, name, description, music, url}) {
  
  const videoRef = useRef(null)
  const [play, setplay] = useState(false)

  function handdleStart(){

    if(play){
      videoRef.current.pause()
      setplay(false)

    } else {
      videoRef.current.play()
      setplay(true)

    }


  }

  return (
    <div className='video'>

        <video className='video__player' ref={videoRef} onClick={handdleStart} loop
         src={url}>

        </video>

        <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
        />

        <Videofooter
        name={name}
        description={description}
        music={music}
         />
    </div>
  )
}

export default Video