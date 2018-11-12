import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import MovieList from './Components/MovieList/MovieList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact render={(props)=>(<MovieList {...props} />)} />
          <Route path='/HighGrossing' render={(props)=>(<MovieList {...props} />)} />
          <Route path='/HighRating' render={(props)=>(<MovieList {...props} />)} />
          <Route path='/movie/:movieId' render={(props)=>(<MovieList {...props} />)} />
          <Route path='/TrendyPeople' render={(props)=>(<MovieList {...props} />)} />


        </Switch>
      </div>
    );
  }
}

export default App;
