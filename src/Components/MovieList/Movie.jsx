import React from "react";
import { Item} from "semantic-ui-react";
import "./Movie.css";
import ReviewLabel from '../ReviewLabel/ReviewLabel'

let Movie = ({ title, overview, poster, id, rating, release }) => {

  return(<Item id="movieItems" label={{corner:'right', content:"hello"}}>
  
    <Item.Image
      id="shadows-image"
      src={`http://image.tmdb.org/t/p/w780/${poster}`}
    />
    <Item.Content id="itemContent" >
      <ReviewLabel rating={rating} />
      <Item.Header id="itemHeader" as="h1" content={title} />

      <Item.Meta id="itemMeta">
        Release Date: {release}
      
      </Item.Meta>
      <Item.Description id="itemInfo">{overview}</Item.Description>
    </Item.Content>
  </Item>
)
}
export default Movie;
