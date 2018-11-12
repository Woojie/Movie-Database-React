import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import MovieList from './Components/MovieList/MovieList'
import MoviePage from './Components/MoviePage/MoviePage'
import axios from 'axios'


class App extends Component {
  state = {
    movies: [],
    movieDetail: {}
  }
  
  getData = (params) =>{
    let url;
    if(params === '/'){
      url = 'https://api.themoviedb.org/3/movie/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1'
    }else if(params ==='/HighRating'){
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`
    }else if(params === '/HighGrossing'){
      url = 'https://api.themoviedb.org/3/discover/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1'
    }
    axios.get(url)
    .then((res)=>this.setState({movies:res.data.results}))
  }
  getMovieDetails = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c62a78a0d2d87be14d317940c5c290b5`)
    .then((res)=>this.setState({movieDetail:res.data}))
  }

  render() {
    const {movies, movieDetail} = this.state
    const {getData, getMovieDetails} = this
    return (
      <div className="App">
        <Navbar getData={getData} />
        <Switch>
          <Route path='/' exact render={(props)=>(<MovieList 
          {...props} getData={getData} 
          movies={movies}
          getMovieDetails ={getMovieDetails} /> )} />

          <Route path='/:params' exact render={(props)=>(<MovieList 
          {...props} getData={getData} 
          movies={movies}
          getMovieDetails={getMovieDetails} /> )} />

          <Route path='/movie/:movieId' render={(props)=>(<MoviePage {...props} movieDetail={movieDetail} />)} />

          <Route path='/TrendyPeople' render={(props)=>(<MovieList {...props} />)} />


        </Switch>
      </div>
    );
  }
}

export default App;
