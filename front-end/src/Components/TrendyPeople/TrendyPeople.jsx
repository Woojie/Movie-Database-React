import React, { Component } from 'react';
import {Grid, Header, Divider, Item, Loader} from 'semantic-ui-react'
import People from './People'

class MovieList extends Component {

  componentDidMount(){
      this.props.getPeopleData()
  }

  render(){
    let {loader} = this.props

    let people = this.props.people.map((person)=> 
    <People
    name={person.name} 
    overview={person.overview}
    id = {person.id}
    key = {person.id}
    profile = {person.profile_path}
    known_for ={person.known_for}
    />)
    let noResults
    if(people.length < 1){
      noResults = "NO Results matched your search, Please Try again!"
    }

    return(
      <div>
      {loader ? <Loader size='massive'/> :(
      <Grid centered inverted>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6} textAlign='center'>
          <Divider hidden/>
            <Header inverted as='h1' content='Trendy People' />
            <Divider />
          </Grid.Column>
          <Grid.Column width={5} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8} textAlign='center'>
          <Divider hidden/>
            <Item.Group relaxed divided>
              {people}
              <Header as='h3'inverted color='red'>{noResults}</Header>
            </Item.Group>
            <Divider />
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
      )}
      </div>
    )
  }
  
}

export default MovieList