import React, { Component } from 'react';
import axios from 'axios'
import {Grid, Header, Divider, Item} from 'semantic-ui-react'
import Movie from './Movie'

class Home extends Component {
state ={
  movies: []
}

componentDidMount(){
  let url = 'https://api.themoviedb.org/3/movie/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1'
  axios.get(url)
    .then((res)=>
      this.setState({movies:res.data.results})
    )
}
  render(){

    let movies = this.state.movies.map((movie)=> 
    <Movie
    title={movie.title} 
    overview={movie.overview}
    id = {movie.id}
    key = {movie.id}
    rating = {movie.vote_average}
    poster = {movie.poster_path}
    release = {movie.release_date}
    />)

    return(

      <Grid centered inverted>
    
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
          <Divider hidden/>
            <Header inverted as='h1' content='Trending Movies' />
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
    )
  }
}

export default Home