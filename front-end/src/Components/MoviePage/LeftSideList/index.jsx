import React from 'react'
import {Grid, List, Header} from 'semantic-ui-react'
import ShortCast from './ShortCast/ShortCast'
import ShortCrew from './ShortCrew/ShortCrew'
import ProductionComp from './Production_Comp/Production_Comp'
import GoogleNews from './GoogleNews'

const LeftSideList = ({cast, crew, scrapedData, production_companies}) => {

  let companies = production_companies === undefined ? "" : production_companies.map((company)=>
  <ProductionComp 
    key={company.id} 
    id={company.id} 
    logo={company.logo_path} 
    name={company.name} />)

let googleNews = scrapedData === undefined ? "" : scrapedData.map((news,i)=>
  <GoogleNews
    key={i}
    text={news.text}
    url={news.url}
    description={news.description}
    source={news.source}
    date={news.date}
    img={news.img}
  />
)

if(crew !== undefined){
  for(let i = 0; i <crew.length-1;i++){
    if(crew[i].name === crew[i+1].name){
      crew[i].job = crew[i].job +" & "+ crew[i+1].job
      crew.splice(i+1, 1)
      i = i-1
    }
  }
}


let newCast = cast === undefined ? "" : [
  cast.length <= 5 ? cast 
  : cast.slice(0, 5)
]
let shortCast = cast === undefined ? "" : newCast[0].map((member)=>
  <ShortCast 
    key={member.id}
    character={member.character}
    creditId={member.credit_id}
    id={member.id}
    gender={member.gender}
    name={member.name}
    profile={member.profile_path}
  />
)

let newCrew = crew === undefined ? "" : [
  crew.length <= 5 ? crew 
  : crew.slice(0, 5)
]
let shortCrew = crew === undefined ? "" : newCrew[0].map((member)=>
  <ShortCrew 
    key={member.id}
    job={member.job}
    creditId={member.credit_id}
    id={member.id}
    gender={member.gender}
    name={member.name}
    profile={member.profile_path}
    department={member.department}
  />
)

  return(
    <Grid.Row>
    <Grid.Column width={3}>
        <List id="productionComp" animated >
          <Header as="h3" content="Production Companies" />
          {companies}
        </List>
        <List divided id="productionComp" animated floated="left" >
          <Header as="h3" content="Cast Members" />
          {shortCast}
          <Header as="a" href="https://developers.themoviedb.org/3/movies/get-movie-keywords" content="Click for Full Cast" />
        </List>
        <List divided id="productionComp" animated floated="left" >
          <Header as="h3" content="Crew Members" />
          {shortCrew}
          <Header as="a" href="https://developers.themoviedb.org/3/movies/get-movie-keywords" content="Click for Full Crew" />
        </List>
    </Grid.Column>
    <Grid.Column width={9}>
      <List divided relaxed id="productionComp" animated floated="left" >
        <Header as="h3" content="News" />
        {googleNews}
      </List>
    </Grid.Column>
    <Grid.Column width={4} />
  </Grid.Row>
  )
}

export default LeftSideList