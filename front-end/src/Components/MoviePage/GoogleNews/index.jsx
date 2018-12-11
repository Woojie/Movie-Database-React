import React from 'react'
import {Item, Image} from 'semantic-ui-react'

const GoogleNews = ({text, url, description, source, date, img}) => (

  
  <Item>
    <Item.Image src={img} size="tiny" />
    <Item.Content>
      <Item.Header as='a' href={url} target="_blank">{text}</Item.Header>
      <Item.Meta>
      Source: {source}<br />
      Date: {date}
      </Item.Meta>
      <Item.Description>
      {description}
      </Item.Description>
    </Item.Content>
  </Item>
)

export default GoogleNews