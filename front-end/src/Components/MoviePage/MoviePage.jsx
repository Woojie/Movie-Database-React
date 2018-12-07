import React, { useEffect } from 'react'
import { Item, Grid, Divider, Header, Segment, Dimmer, Loader, List} from "semantic-ui-react";
import "./MoviePage.css";
import DollarSign from '../DollarSign'
import ProductionComp from '../Production_Comp/Production_Comp'
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
    let companies = production_companies === undefined ? "" : production_companies.map((company)=>
      <ProductionComp 
        key={company.id} 
        id={company.id} 
        logo={company.logo_path} 
        name={company.name} />)
    
    return(
      <React.Fragment>
      <Grid centered inverted>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
            <Divider hidden/>
            <Header  as='h1' content={title} />
            <Divider />
            </Grid.Column>
          <Grid.Column width={5} />
          </Grid.Row>
          {props.details === undefined ? <Dimmer active><Loader size="massive" /></Dimmer>
          :(
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
            )}
            <Grid.Row>
              
              <Grid.Column width={5}>
                  <List id="productionComp" floated="left" >
                  <Segment inverted>
                    <Header as="h5" content="Production Companies" />
                    {companies}
                    </Segment>
                  </List>
              </Grid.Column>
              <Grid.Column width={6}>
              </Grid.Column>
              <Grid.Column width={5} />
            </Grid.Row>
        </Grid>
        </React.Fragment>
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