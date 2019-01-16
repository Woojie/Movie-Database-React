import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import './App.css';
import MovieList from './Components/MovieList'
import MoviePage from './Components/MoviePage/'
import TrendyPeople from './Components/TrendyPeople/TrendyPeople'
import ProductionCompany from './Components/ProductionCompany'


const App = () => (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route path='/' exact render={(props)=>(<MovieList 
            {...props}/> 
          )} />

          <Route path='/:params' exact render={(props)=>(<MovieList 
            {...props}  
          /> 
          )} />

          <Route path='/movie/:movieId' render={(props)=>(<MoviePage 
            {...props} 
          />)} />

          <Route path='/production/:prodId' render={(props)=>(<ProductionCompany
            {...props} 
          />)} />

          <Route path='/people/TrendyPeople' render={(props)=>(<TrendyPeople 
            {...props}
          />)} />
        </Switch>
      </React.Fragment>
)



export default App;
