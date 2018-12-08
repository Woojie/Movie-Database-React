import React from 'react'
import {List, Image} from 'semantic-ui-react'

const GoogleNews = ({text, url, description, source, date, img}) => (

  <List.Item>
    <Image src={img} />
    <List.Content>
      <List.Header as='a' href={url} target="_blank">{text}</List.Header>
      <List.Description>
        <i>{source}: {date}</i>
      <br />
      {description}
      </List.Description>
    </List.Content>
  </List.Item>
)

export default GoogleNews