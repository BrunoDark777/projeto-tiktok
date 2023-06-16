import React, { useRef, useState } from 'react'
import Videofooter from './componentes/footer/Videofooter'
import "./video.css"

function Video() {
  
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
         src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z">

        </video>

        {/* side bar */}
        <Videofooter />
    </div>
  )
}

export default Video