import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const BackDropCarousel = ({backdrops}) => {
  let images = backdrops.map((image, i)=>(
    
    <div key={i}>
      <img src={`http://image.tmdb.org/t/p/w1280/${image.file_path}`} alt="backdrop-images" key={i} />
    </div>

  ))
  return(
    <Carousel autoPlay transitionTime={1000} emulateTouch infiniteLoop>
      {images}
    </Carousel>
  )
}

export default BackDropCarousel