import React from 'react'
import VideoCard from '../components/VideoCard'
import "../styles/video.css"

const Videos = ({videos}) => {
  return (
    <div className="Videos">
        {
            videos.map((item,index) => (
                 <VideoCard index={index} key={item.index} image={item.image} name={item.name}/>
            ))
        }
    </div>
  )
}

export default Videos