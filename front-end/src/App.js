import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import MovieList from './Components/MovieList'
import MoviePage from './Components/MoviePage/MoviePage'
import axios from 'axios'
import TrendyPeople from './Components/TrendyPeople/TrendyPeople'


class App extends Component {
  state = {
    people: []
  }
  


  getPeopleData = () =>{
    this.setState({loader: true})
    axios.get(`https://api.themoviedb.org/3/person/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`)
      .then((res)=>{this.setState({people:res.data.results})})
  }

  render() {
    const {movies, loader, people} = this.state
    const {getData, getPeopleData} = this
    return (
      <div className="App">
        <Navbar getPeopleData={getPeopleData} />

        <Switch>
          <Route path='/' exact render={(props)=>(<MovieList 
            {...props}
            movies={movies}
            loader={loader} /> 
          )} />

          <Route path='/:params' exact render={(props)=>(<MovieList 
            {...props} getData={getData} 
            movies={movies}
            loader={loader}
          /> 
          )} />

          <Route path='/movie/:movieId' render={(props)=>(<MoviePage 
            {...props} 
          />)} />

          <Route path='/people/TrendyPeople' render={(props)=>(<TrendyPeople 
            {...props} 
            getPeopleData={this.getPeopleData} 
            people={people} 
          />)} />


        </Switch>
      </div>
    );
  }
}

export default App;
