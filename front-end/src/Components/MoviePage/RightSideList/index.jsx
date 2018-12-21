import React from 'react'
import {Grid, List, Header} from 'semantic-ui-react'
import SimilarMovies from './SimilarMovies/SimilarMovies'
import ProductionComp from './Production_Comp/Production_Comp'

import uuidv4 from 'uuid/v4'

const RightSideList = ({similar, production_companies}) => {

  let companies = production_companies === undefined ? "" : production_companies.map((company)=>
  <ProductionComp 
    key={company.id} 
    id={company.id} 
    logo={company.logo_path} 
    name={company.name} />)


  let similarMovies = similar === undefined ? "" 
  : similar.map((movies)=><SimilarMovies
    title = {movies.title}
    rating = {movies.vote_average}
    poster = {movies.poster_path}
    date = {movies.release_date}
    id = {movies.id} 
    key = {uuidv4()}
  />)

  return(
    <Grid.Column width={4}>
      <List id="productionComp" animated >
        <Header as="h3" content="Production Companies" />
        {companies}
      </List>
      <List animated divided relaxed >
          <Header as="h3" content={similar.length === 0 ? "" : "Similar Movies"} />
          {similarMovies}
      </List>
      
    </Grid.Column> 
  )
}

export default RightSideList