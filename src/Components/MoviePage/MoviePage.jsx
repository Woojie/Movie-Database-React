import React, { Component } from 'react'
import { Item, Grid, Divider, Header} from "semantic-ui-react";
import axios from 'axios'


class MoviePage extends Component {

  render(){
    

    return(
      <Grid centered inverted>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
            <Divider hidden/>
            <Header inverted as='h1' content={this.props.movieDetail.title} />
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