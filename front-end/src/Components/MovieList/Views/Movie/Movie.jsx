import React from "react";
import {Item} from "semantic-ui-react";
import "./Movie.css";
import ReviewLabel from '../ReviewLabel'
import {NavLink} from 'react-router-dom';

let Movie = ({ title, overview, poster, id, rating, release, movieDetails}) => (


  <Item id="movieItems" label={{corner:'right', content:"hello"}}>
    <Item.Image
      id="shadows-image"
      src={`http://image.tmdb.org/t/p/w780/${poster}`}
    />
    <Item.Content>
      <ReviewLabel rating={rating} />
      <NavLink to={`/movie/${id}`} onClick={() => movieDetails(id)}><Item.Header as="h2" content={title} /></NavLink>

      <Item.Meta id="itemMeta">
        Release Date: {release}
 
      </Item.Meta>
      <Item.Description id="itemInfo">
        
        
        {overview}
      </Item.Description>
    </Item.Content>
  </Item>

)

export default Movie;
