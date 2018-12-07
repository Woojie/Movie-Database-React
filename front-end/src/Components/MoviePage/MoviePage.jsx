import React, { useEffect } from 'react'
import { Item, Grid, Divider, Header, Segment} from "semantic-ui-react";
import "./MoviePage.css";
import DollarSign from '../DollarSign'
import Production_Comp from '../Production _Comp/Production_Comp'
import RateAndFav from '../RateAndFav/RateAndFav'
import {connect} from 'react-redux'
import { movieDetails} from '../../store'

const MoviePage = (props) => {
  useEffect(()=>{
    let id = props.match.params.movieId
    props.movieDetails(id)
  },[])
  
    let {title, backdrop_path, poster_path, genres, id, production_companies, release_date, revenue, runtime, vote_average, tagline, budget, overview } = props.details === undefined ? "" : props.details
    let backdropImage = {
      backgroundImage:`url(http://image.tmdb.org/t/p/w1280/${backdrop_path})`,
      paddingTop: '0'
    }
    
    return(
      <Grid centered inverted>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
            <Divider hidden/>
            <Header inverted as='h1' content={title} />
            <Divider />
            </Grid.Column>
          <Grid.Column width={5} />
          </Grid.Row>
          <Grid.Row  id='backdrop' style={backdropImage}>
            <Grid.Column width={4} />
            <Grid.Column width={8} textAlign='center'>
            <Item.Group>
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
              </Item.Group>
              <Divider hidden/>
            </Grid.Column>
            <Grid.Column width={4} />
            </Grid.Row>
            <Grid.Row>
              
            </Grid.Row>
        </Grid>
    ) 
}

const reduxProps = state => {
  return{
    loading: state.loading,
    details: state.movieDetail
  }
}
const dispatchRedux = dispatch => {
  return{
    movieDetails: (id) => movieDetails(id)
  }
}

export default connect(reduxProps, dispatchRedux)(MoviePage)