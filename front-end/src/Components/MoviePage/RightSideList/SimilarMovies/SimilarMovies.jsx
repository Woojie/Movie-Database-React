import React from 'react'
import {List, Image} from 'semantic-ui-react'
import "./SimilarMovies.css";

const SimilarMovies = ({title, backdrop, poster, rating, date, id}) => {

  return(
  
  <List.Item>
  <Image bordered size="mini" src={poster ? `http://image.tmdb.org/t/p/w1280/${poster}` : `/images/Movies-icon.png`} />
  <List.Content >
    <List.Header>{title}</List.Header>
    <List.Description>
      Review: {rating} <br />
      Released: <i>{date}</i>
    </List.Description>
  </List.Content>
</List.Item>
  )
}

export default SimilarMovies