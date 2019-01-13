import React from 'react'
import {List, Image} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';



const Production_Comp = ({id, logo, name}) =>(

  <List.Item as="a" href={`/production/${id}`}>
    <Image avatar src={logo ? `http://image.tmdb.org/t/p/w1280/${logo}` : `/images/corp-logo.png`} />
    <List.Content>
      <List.Header>{name}</List.Header>
    </List.Content>
  </List.Item>

)


export default Production_Comp