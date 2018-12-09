import React from 'react'
import {Grid, List, Header} from 'semantic-ui-react'
import SimilarMovies from './SimilarMovies/SimilarMovies'
import uuidv4 from 'uuid/v4'

const RightSideList = ({similar}) => {

  let similarMovies = similar === undefined ? "" 
  : similar.map((movies)=><SimilarMovies
    backdrop = {movies.backdrop_path}
    title = {movies.title}
    rating = {movies.vote_average}
    poster = {movies.poster_path}
    date = {movies.release_date}
    id = {movies.id} 
    key = {uuidv4()}
  />)

  return(
    <Grid.Column width={4}>
      <List animated divided relaxed >
          <Header as="h3" content={similar.length === 0 ? "" : "Similar Movies"} />
          {similarMovies}
      </List>
      
    </Grid.Column> 
  )
}

export default RightSideList