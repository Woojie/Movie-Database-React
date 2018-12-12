import React, { useEffect } from 'react'
import { Item, Grid, Divider, Header, Dimmer, Loader} from "semantic-ui-react";
import "./MoviePage.css";

import {connect} from 'react-redux'
import { movieDetails} from '../../store'
import GoogleNews from './GoogleNews'
import LeftSideList from './LeftSideList'
import RightSideList from './RightSideList';
import HeaderInfo from './HeaderInfo'


const MoviePage = ({details, scrapedData, match, movieDetails, cast, crew, similar}) => {
  useEffect(()=>{
    let id = match.params.movieId
    movieDetails(id)
  },[])
  
    let {title, backdrop_path, id, production_companies } = details === undefined ? "" : details
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
                <HeaderInfo 
                  details={details}
                />
              </Item.Group>
              <Divider hidden/>
            </Grid.Column>
            <Grid.Column width={4} />
            </Grid.Row>
            <Grid.Row>
                <LeftSideList cast={cast} crew={crew} production_companies={production_companies} />
              <Grid.Column width={9}>
                <Header as="h3" content="News" />
                <Item.Group divided relaxed id="productionComp" animated >
                  {googleNews}
                </Item.Group>
              </Grid.Column>
              <RightSideList similar={similar} />
            </Grid.Row>
          </React.Fragment>
        )}
        </Grid>

    ) 
}

const reduxProps = ({movieDetailsReducer:{loading, movieDetail, scrapedData, cast, crew, similar}}) => {
  return{
    loading: loading,
    details: movieDetail,
    scrapedData:scrapedData,
    cast: cast,
    crew: crew,
    similar: similar
  }
}
const dispatchRedux = dispatch => {
  return{
    movieDetails: (id) => movieDetails(id)
  }
}

export default connect(reduxProps, dispatchRedux)(MoviePage)