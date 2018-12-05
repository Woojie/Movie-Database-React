import React, { Component } from 'react';
import {Grid, Header, Divider, Item} from 'semantic-ui-react'
import Movie from './Movie'
import {connect} from 'react-redux'
import {getPopularData, getHighRatedData, getHighGrossingData} from '../../redux/store'
import Placeholders from './Placeholders'

class MovieList extends Component {

  componentDidMount(){
    let {match, getData, onSearch} = this.props
    if(match.url === '/'){
      this.props.getPopularData()
    }else if(match.url ==='/HighRating'){
      this.props.getHighRatedData()
    }else if(match.url === '/HighGrossing'){
      this.props.getHighGrossingData()
    }else{
      onSearch(`/${match.params.params}`, ()=>{})
    }
  }

  render(){
    let {match, getMovieDetails} = this.props
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
    console.log(this.props.movieResults)
    let movies = this.props.movieResults !== undefined ? (this.props.movieResults.map((movie)=> 
    <Movie
    title={movie.title} 
    overview={movie.overview}
    id = {movie.id}
    key = {movie.id}
    rating = {movie.vote_average}
    poster = {movie.poster_path}
    release = {movie.release_date}
    getMovieDetails = {getMovieDetails}
    />))
    : []
    let noResults
    if(movies.length < 1){
      noResults = "NO Results matched your search, Please Try again!"
    }

    return(
      <div>
      {this.props.loading ? <Placeholders />    
 :(
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
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8} textAlign='center'>
          <Divider hidden/>
            <Item.Group relaxed divided>
              {movies}
              <Header as='h3'inverted color='red'>{noResults}</Header>
            </Item.Group>
            <Divider />
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
      )}
      </div>
    )
  }
  
}

const reduxProps = state => {
  return{
    loading: state.loading,
    movieResults: state.results
  }
}
const dispatchRedux = dispatch => {
  return{
    getPopularData: () => getPopularData(),
    getHighRatedData: () => getHighRatedData(),
    getHighGrossingData: () => getHighGrossingData()
  }
}

export default connect(reduxProps, dispatchRedux)(MovieList)