import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Divider, Image } from 'semantic-ui-react'

import { getProductionCompany } from '../../actions/companies'

const ProductionCompany = ({ match, getProductionCompany, name, logo, homepage, hq }) => {

  useEffect(()=>{
    let id = match.params.prodId
    getProductionCompany(id)
    
  },[])
  let hovers = {
    hover: "left"
  }
  return (
    <Grid centered inverted stackable>
      <Grid.Row>
        <Grid.Column width={5} />
        <Grid.Column width={6} textAlign="center">
          <Divider hidden />

          <Header as='h1'>
          <Image style={hovers} src={`http://image.tmdb.org/t/p/w1280/${logo}`} size='tiny' />
          <a href={homepage}>{name}</a>
          </Header>
          <Divider /> 

       
        </Grid.Column>
        <Grid.Column width={5} />
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = ( {companyReducer:{movieResults, name, logo, hq, homepage}} ) => {
  return {
    movieResults,
    name,
    logo,
    hq, 
    homepage
  }
}

export default connect(mapStateToProps, {getProductionCompany})( ProductionCompany )