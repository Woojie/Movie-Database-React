import React, { Component } from 'react'
import { Item, Grid, Divider, Header} from "semantic-ui-react";
import axios from 'axios'


class MoviePage extends Component {
  state ={
    movieDetails:[]
  }
  componentWillReceiveProps(){
    let {movieId} = this.props.match.params
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c62a78a0d2d87be14d317940c5c290b5`)
      .then((res)=>{this.setState({movieDetails:res.data})})
  }
  render(){
    

    return(
      <Grid centered inverted>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
            <Divider hidden/>
            <Header inverted as='h1' content={this.state.movieDetails.title} />
            <Divider />
            </Grid.Column>
          <Grid.Column width={5} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4} />
            <Grid.Column width={8} textAlign='center'>
            <Divider hidden/>
              <Item.Group relaxed divided>
      
              </Item.Group>
              <Divider />
              </Grid.Column>
              <Grid.Column width={4} />
            </Grid.Row>
        </Grid>
    )
  }
}

export default MoviePage