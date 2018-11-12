import React from 'react';
import {Item} from 'semantic-ui-react'
import './Movie.css';


let Movie = ({title, overview, poster, id, rating, release}) =>(
  
 <Item id="movieItems">
   <Item.Image id="shadows-image"  src={`http://image.tmdb.org/t/p/w780/${poster}`} />
   <Item.Content id='itemContent'>
    <Item.Header id='itemHeader' as='h1' content={title}  />
    <Item.Meta id='itemMeta'>

      Release Date: {release}
    </Item.Meta>
    <Item.Description id='itemInfo'>
      {overview}
    </Item.Description>
   </Item.Content>
 </Item>
  
)
export default Movie