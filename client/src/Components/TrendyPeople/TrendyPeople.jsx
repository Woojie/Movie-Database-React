import React, { useEffect } from 'react';
import {Grid, Header, Divider, Item, Loader} from 'semantic-ui-react'
import People from './People'
import {connect} from 'react-redux'
import { trendyPeople } from '../../store'

const TrendyPeople = (props) => {

  useEffect(()=>{
    props.trendyPeople()
  },[])

    let {loader} = props

    let people = props.people === undefined ? "" : props.people.map((person)=> 
    <People
    name={person.name} 
    overview={person.overview}
    id = {person.id}
    key = {person.id}
    profile = {person.profile_path}
    known_for ={person.known_for}
    />)


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

const reduxProps = ({getPeopleDataReducer:{loading, people}}) => {
  return{
    loading: loading,
    people: people
  }
}
const dispatchRedux = dispatch => {
  return{
    trendyPeople: () => trendyPeople()
  }
}

export default connect(reduxProps, dispatchRedux)(TrendyPeople)