import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Home from './Components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact render={(props)=>(<Home {...props} />)} />
          <Route path='/HighGrosing' render={(props)=>(<Home {...props} />)} />
          <Route path='/HighRating' render={(props)=>(<Home {...props} />)} />
          <Route path='/movie/:movieId' render={(props)=>(<Home {...props} />)} />
          <Route path='/TrendyPeople' render={(props)=>(<Home {...props} />)} />


        </Switch>
      </div>
    );
  }
}

export default App;
