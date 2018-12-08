import React from 'react'
import {List, Image} from "semantic-ui-react";


const ShortCast = ({id, name, profile, character, gender}) =>(

  <List.Item>
    <Image bordered size="mini" src={profile ? `http://image.tmdb.org/t/p/w1280/${profile}` : `/images/no-image.png`} />
    <List.Content>
      <List.Header>{name}</List.Header>
      <List.Description>as: <i>{character}</i></List.Description>
    </List.Content>
  </List.Item>

)


export default ShortCast