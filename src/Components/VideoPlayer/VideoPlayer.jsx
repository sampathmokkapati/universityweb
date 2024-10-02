import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '/Users/sampath/Desktop/eduversity/src/assets/2086113-hd_1920_1080_30fps.mp4'
const VideoPlayer = ({playState, setPlayState}) => {

const player = useRef(null);
const closePlayer = (e)=>{
    if(e.target === player.current){
        setPlayState(false);
    }
}



  return (
    <div className={`video-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
