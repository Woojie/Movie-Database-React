import React, { useEffect, useState } from 'react'
import { Item, Grid, Divider, Header, Dimmer, Loader, Button } from "semantic-ui-react";
import { connect } from 'react-redux'

import "./MoviePage.css";

import { getMovieDetails } from '../../actions/movieDetails'
import GoogleNews from './GoogleNews'
import LeftSideList from './LeftSideList'
import RightSideList from './RightSideList';
import HeaderInfo from './HeaderInfo'
import BackdropCarousel from './BackdropCarousel'
import MovieVideos from './MovieVideos'


const MoviePage = ({ details, scrapedData, match, movieDetails, cast, crew, similar, backdrops, videos }) => {
  const [loading, startLoading] = useState(true)
  const [fullNews, showMoreNews] =  useState(false)
  
  useEffect(()=>{
    startLoading(true)
    let id = match.params.movieId
    
  let grabData = (id) => {
    return new Promise((resolve, reject)=>{
      resolve(movieDetails(id))
    })
  }

    grabData(id)
    .then(()=>{
      setTimeout(() => {
        startLoading(false)
      }, 1300)
    })


  },[])

  let { title, backdrop_path, id, production_companies } = details === undefined ? "" : details
    let backdropImage = {
      backgroundImage:`url(http://image.tmdb.org/t/p/w1280/${backdrop_path})`,
      paddingTop: '0'
    }
    let googleNews
    if(scrapedData === undefined ){
      googleNews = ""
    }else {
      if(fullNews){
        googleNews = scrapedData.map((news,i)=>
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
      }else{
        googleNews = scrapedData.filter((news,i)=>i<=3).map((news,i)=>
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
      }
    }
    console.log(loading)
    return(

      <Grid centered inverted stackable>
        {details === undefined || loading ? <Dimmer active><Loader size="massive" /></Dimmer>
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
                <LeftSideList cast={cast} crew={crew} />
              <Grid.Column width={9}>
                <Header as="h3" content="News" />
                <Item.Group divided relaxed id="productionComp" >
                  {googleNews}
                </Item.Group>
              <Button basic 
                content={fullNews ? "Less":"More"} 
                icon={fullNews ? "angle up":"angle down"} 
                onClick={()=>showMoreNews(!fullNews)} 
              />
              </Grid.Column>
              <RightSideList 
                similar={similar}  
                production_companies={production_companies} 
              />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={1} /> 
              <Grid.Column width={6} >
                <Header as="h1" content="Videos" /> 
                <MovieVideos videos={videos} />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as="h1" content="Image Gallery" /> 
                <BackdropCarousel backdrops = {backdrops} />
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
          </React.Fragment>
        )}
        </Grid>

    ) 
}

const reduxProps = ({
  movieDetailsReducer:{loading, movieDetail, scrapedData, cast, crew, similar, backdrop, videos},
}) => {
  return{
    loading,
    details: movieDetail,
    scrapedData,
    cast,
    crew,
    similar,
    backdrops:backdrop,
    videos,
  }
}
const dispatchRedux = dispatch => {
  return{
    movieDetails: (id) => dispatch(getMovieDetails(id))
  }
}

export default connect(reduxProps, dispatchRedux)(MoviePage)