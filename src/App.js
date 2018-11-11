import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Home from './Components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path='/' exact render={(props)=>(<Home {...props} />)} />

      </div>
    );
  }
}

export default App;
