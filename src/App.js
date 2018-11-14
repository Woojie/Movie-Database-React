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
    movieDetail: {},
    loader: true
  }
  
  getData = (params) =>{
    this.setState({loader:true})
    let url;
    if(params === '/'){
      url = 'https://api.themoviedb.org/3/movie/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1'
    }else if(params ==='/HighRating'){
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`
    }else if(params === '/HighGrossing'){
      url = 'https://api.themoviedb.org/3/discover/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1'
    }
    axios.get(url)
    .then((res)=>this.setState({movies:res.data.results, loader:false}))
  }

  getMovieDetails = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c62a78a0d2d87be14d317940c5c290b5`)
    .then((res)=>this.setState({movieDetail:res.data}))
  }

  onSearch = (query, func) =>{
    this.setState({loader:true})
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&query=${query}`)
      .then((res)=>{
        let searchResults = res.data.results.filter((movie)=>{return movie.vote_count > 75})
        this.setState({movies:searchResults, loader:false},()=> func())
      })
  }

  render() {
    const {movies, movieDetail, loader} = this.state
    const {getData, getMovieDetails} = this
    return (
      <div className="App">
        <Navbar getData={getData} onSearch={this.onSearch} />

        <Switch>
          <Route path='/' exact render={(props)=>(<MovieList 
          {...props} getData={getData} 
          movies={movies}
          getMovieDetails ={getMovieDetails}
          loader={this.state.loader} /> )} />

          <Route path='/:params' exact render={(props)=>(<MovieList 
          {...props} getData={getData} 
          movies={movies}
          getMovieDetails={getMovieDetails}
          loader={loader}
          onSearch={this.onSearch} /> )} />

          <Route path='/movie/:movieId' render={(props)=>(<MoviePage {...props} getMovieDetails={getMovieDetails} movieDetail={movieDetail} />)} />

          <Route path='/TrendyPeople' render={(props)=>(<MovieList {...props} />)} />


        </Switch>
      </div>
    );
  }
}

export default App;
