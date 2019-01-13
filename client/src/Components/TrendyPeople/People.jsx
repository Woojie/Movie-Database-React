import React from "react";
import {Item, Card, Image} from "semantic-ui-react";
import "./People.css";
import {Link} from "react-router-dom"

import {NavLink} from 'react-router-dom';

let People = ({ name, overview, id, profile, known_for, history}) => {

  let knownFor = known_for.map((movie)=>(
  <Card link 
    key={movie.id} 
    color='orange' 
    raised
  >
    <Link to={`/movie/${movie.id}`}>
      <Image  id="cardImage" 
        src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} 
      />
    </Link>
  </Card>
  ))

  return(
  <Item id="movieItems" label={{corner:'right', content:"hello"}}>
    <Item.Image
      id="shadows-image"
      src={`http://image.tmdb.org/t/p/w780/${profile}`}
    />
    <Item.Content>
      <NavLink to={`/movie/${id}`}><Item.Header id="itemHeader" as="h2" content={name} /></NavLink>

      <Item.Meta id="itemMeta">
      </Item.Meta>
      <Item.Description id="itemInfo">
          <Card.Group stackable itemsPerRow={3} id="cardSize">
            {knownFor}
          </Card.Group>
      </Item.Description>
    </Item.Content>
  </Item>

)
}

export default People;
