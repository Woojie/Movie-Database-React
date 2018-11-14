import React, { Component } from 'react';
import {Grid, Header, Divider, Item, Loader} from 'semantic-ui-react'
import Movie from './Movie'

class MovieList extends Component {

  componentDidMount(){
    let {match} = this.props
    if(match.url === '/'){
      this.props.getData('/')
    }else if(match.url ==='/HighRating'){
      this.props.getData('/HighRating')
    }else if(match.url === '/HighGrossing'){
      this.props.getData('/HighGrossing')
    }else{
      this.props.onSearch(`/${match.params.params}`, ()=>{})
    }
  }

  render(){
    let {match, loader, getMovieDetails} = this.props
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
    let movies = this.props.movies.map((movie)=> 
    <Movie
    title={movie.title} 
    overview={movie.overview}
    id = {movie.id}
    key = {movie.id}
    rating = {movie.vote_average}
    poster = {movie.poster_path}
    release = {movie.release_date}
    getMovieDetails = {getMovieDetails}
    />)
    let noResults
    if(movies.length < 1){
      noResults = "NO Results matched your search, Please Try again!"
    }

    return(
      <div>
      {loader ? <Loader size='massive'/> :(
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

export default MovieList