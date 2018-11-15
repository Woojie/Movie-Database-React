import React from "react";
import {Item} from "semantic-ui-react";
import "./People.css";

import {NavLink} from 'react-router-dom';

let People = ({ name, overview, id, profile, known_for}) => (


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
        {overview}
      </Item.Description>
    </Item.Content>
  </Item>

)

export default People;
