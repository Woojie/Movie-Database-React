import React, { useEffect } from 'react';
import {Grid, Header, Divider, Item} from 'semantic-ui-react'
import Movie from './Views/Movie/Movie'
import {connect} from 'react-redux'
import { getMovieDetails } from '../../actions/movieDetails'
import { getPopularData, movieSearch, getHighRatedData, getHighGrossingData } from '../../actions/getMovieListData'
import Placeholders from './Views/Placeholders'

const MovieList = ({ loading, movieResults, movieDetails, match, getPopularData, getHighGrossingData, getHighRatedData, movieSearch }) => {


  useEffect(()=>{
    if(match.url === '/'){
      getPopularData()
    }else if(match.url ==='/HighRating'){
      getHighRatedData()
    }else if(match.url === '/HighGrossing'){
      getHighGrossingData()
    }else{
      movieSearch(`/${match.params.params}`)
    }
  }, [])

    let title
    if(match.url === '/'){
      title = "Popular Movies"
    }else if(match.url === '/HighRating'){
      title = 'Highest Rated Movies'
    }else if(match.url === '/HighGrossing'){
      title = 'Highest Grossing Films of all Time'
    }else{
      title = `Search Results for "${match.params.params}"`
    }
    let movies = movieResults !== undefined ? (movieResults.map((movie)=> 
    <Movie
    title={movie.title} 
    overview={movie.overview}
    id = {movie.id}
    key = {movie.id}
    rating = {movie.vote_average}
    poster = {movie.poster_path}
    release = {movie.release_date}
    movieDetails = {movieDetails}
    />))
    : []

  return(
      <React.Fragment>
      {loading ? <Placeholders />    
      :(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
          <Divider hidden/>
            <Header as='h1' content={title} />
            <Divider />
          </Grid.Column>
          <Grid.Column width={5} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8} textAlign='center'>
          <Divider hidden/>
            <Item.Group relaxed divided>
              {movies}
          
            </Item.Group>
            <Divider />
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
      )}
      </React.Fragment>
  )
}
  


const reduxProps = ({getDataReducer}) => {
  
  return{
    loading: getDataReducer.loading,
    movieResults: getDataReducer.results
  }
}
const dispatchRedux = dispatch => {
  return{
    getPopularData: () => dispatch(getPopularData()),
    getHighRatedData: () => dispatch(getHighRatedData()),
    getHighGrossingData: () => dispatch(getHighGrossingData()),
    movieSearch: (params) => dispatch(movieSearch(params)),
    movieDetails: (id) => dispatch(getMovieDetails(id)),
  }
}

export default connect(reduxProps, dispatchRedux)(MovieList)