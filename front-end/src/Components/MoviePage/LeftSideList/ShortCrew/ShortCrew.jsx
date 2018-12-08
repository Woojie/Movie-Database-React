import React from 'react'
import {List, Image} from "semantic-ui-react";


const ShortCrew = ({id, name, profile, job, gender, department}) =>(

  <List.Item>
    <Image bordered size="mini" src={profile ? `http://image.tmdb.org/t/p/w1280/${profile}` : `/images/no-image.png`} />
    <List.Content>
      <List.Header>{name}</List.Header>
      <List.Description>
        <b>Title:</b> {job}
        <br />
        <b>Department:</b> {department}
        </List.Description>
    </List.Content>
  </List.Item>

)


export default ShortCrew