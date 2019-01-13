import React from 'react'
import {Grid} from 'semantic-ui-react'

const Placeholders = () => (
  <Grid >
  <Grid.Row>
    <Grid.Column width={4} />
    <Grid.Column width={8} textAlign='center'>
      Loading...
    </Grid.Column>
    <Grid.Column width='4' />
  </Grid.Row>
  </Grid>

  
)

export default Placeholders