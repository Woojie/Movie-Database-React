import React, { useEffect } from 'react'
import { Item, Grid, Divider, Header, Segment, Dimmer, Loader, List} from "semantic-ui-react";
import "./MoviePage.css";
import DollarSign from '../DollarSign'
import RateAndFav from './RateAndFav/RateAndFav'
import {connect} from 'react-redux'
import { movieDetails} from '../../store'
import GoogleNews from './GoogleNews'
import LeftSideList from './LeftSideList'
import RightSideList from './RightSideList';


const MoviePage = ({details, scrapedData, match, movieDetails, cast, crew, similar}) => {
  useEffect(()=>{
    let id = match.params.movieId
    movieDetails(id)
  },[])
  
    let {title, backdrop_path, poster_path, genres, id, production_companies, release_date, revenue, runtime, vote_average, tagline, budget, overview } = details === undefined ? "" : details
    let backdropImage = {
      backgroundImage:`url(http://image.tmdb.org/t/p/w1280/${backdrop_path})`,
      paddingTop: '0'
    }

    let googleNews = scrapedData === undefined ? "" : scrapedData.map((news,i)=>
  <GoogleNews
    key={i}
    text={news.text}
    url={news.url}
    description={news.description}
    source={news.source}
    date={news.date}
    img={news.img}
  />
)


    return(
      <Grid centered inverted stackable>
        {details === undefined ? <Dimmer active><Loader size="massive" /></Dimmer>
        :(
        <React.Fragment>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
            <Divider hidden/>
            <Header  as='h1' content={title} />
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
                <LeftSideList cast={cast} crew={crew} production_companies={production_companies} />
              <Grid.Column width={9}>
                <List divided relaxed id="productionComp" verticalAlign="middle" animated >
                  <Header as="h3" content="News" />
                  {googleNews}
                </List>
              </Grid.Column>
              <RightSideList similar={similar} />
            </Grid.Row>
          </React.Fragment>
        )}
        </Grid>

    ) 
}

const reduxProps = state => {
  return{
    loading: state.loading,
    details: state.movieDetail,
    scrapedData: state.scrapedData,
    cast: state.cast,
    crew: state.crew,
    similar: state.similar
  }
}
const dispatchRedux = dispatch => {
  return{
    movieDetails: (id) => movieDetails(id)
  }
}

export default connect(reduxProps, dispatchRedux)(MoviePage)