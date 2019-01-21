import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Embed } from 'semantic-ui-react'


const MovieVideos = ({ videos }) => {
  let videoCarousel= videos.map((video, i)=>(
    <React.Fragment key={i}>
    <div>
        <Embed id={video.key} brandedUI source='youtube' />
        <p className="legend">{video.name}</p>
    </div>
    </React.Fragment>
  ))
  return(
    <Carousel showThumbs={false} emulateTouch>
      {videoCarousel}
    </Carousel>
  )
}

export default MovieVideos