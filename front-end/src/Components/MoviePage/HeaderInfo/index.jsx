import React, { useEffect } from 'react'
import { Item,  Header, Segment} from "semantic-ui-react"
import DollarSign from '../../DollarSign'
import RateAndFav from '../RateAndFav/RateAndFav'

const HeaderInfo = ({details:{poster_path, tagline, release_date, runtime, budget, revenue, vote_average, genres, overview}}) => {
  
  return(
  <Item>
  <Item.Image id="moviePoster" src={`http://image.tmdb.org/t/p/w1280/${poster_path}`} />
  <Segment id='movieContent' raised inverted >
  <Item.Content>
    <Item.Description>
      <Segment basic inverted >
        <Header textAlign='center' as='h4' content={tagline} inverted />
        <p className='noMargins'><b>Release Date:</b> {release_date}</p>
        <p className='noMargins'><b>Runtime:</b> {runtime} minutes</p>
        <DollarSign revenue={revenue} budget ={budget} />
        <RateAndFav rating={vote_average} genres={genres} />
      </Segment>
       <p> {overview}</p>
    </Item.Description>
  </Item.Content>
  </Segment>
  </Item>
  )
}

export default HeaderInfo