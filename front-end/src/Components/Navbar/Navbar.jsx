import React, { useState } from 'react';
import {Menu,Segment, Form, Input, Radio, Button, Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux'
import {getPopularData, getHighRatedData, getHighGrossingData, movieSearch, trendyPeople} from '../../store'

const Navbar = ({trendyPeople, getPopularData, getHighGrossingData, getHighRatedData, movieSearch}) => {

  const [radioCheck, handleRadio] = useState("1")
  const [activeItem, handleItemClick] = useState(window.location.pathname)
  const [search, handleInput] = useState("")

    return (
      <div className="App">
        <Segment inverted>
          <Menu inverted pointing secondary stackable>
          <NavLink onClick={getPopularData}  to='/'>
            <Menu.Item 
              as='label'
              name='/' 
              active={activeItem === '/'} 
              onClick={()=>handleItemClick('/')} 
            >
            <Icon inverted color="orange" name='home' fitted />
            Home
            </Menu.Item>
          </NavLink>

          <NavLink to='/HighRating' onClick={getHighRatedData}><Menu.Item 
            as='label'
            name='/HighRating' 
            active={activeItem === '/HighRating'} 
            onClick={()=>handleItemClick('/HighRating')}>
            <Icon inverted color='orange' name='star outline' fitted />
            Highest Rated
          </Menu.Item>
          </NavLink>

          <NavLink to='/HighGrossing' onClick={getHighGrossingData}><Menu.Item 
            name='/HighGrossing' 
            as='label'
            active={activeItem === '/HighGrossing'} 
            onClick={()=>handleItemClick('/HighGrossing')}>
            <Icon inverted color='green' name='dollar sign' fitted />
            Highest Grossing
            </Menu.Item>
          </NavLink>
          
          <NavLink to='/favorites'><Menu.Item 
            name='favorites' 
            as='label'
            active={activeItem === '/favorites'} 
            onClick={()=>handleItemClick('/favorites')}>
            <Icon inverted color='green' name='favorite' fitted />
            Favorites
          </Menu.Item>
          </NavLink>

          <NavLink onClick={trendyPeople} to='/people/TrendyPeople'><Menu.Item 
            name='/TrendyPeople' 
            as='label'
            active={activeItem === '/TrendyPeople'} 
            onClick={()=>handleItemClick('/TrendyPeople')}>
          <Icon inverted color='green' name='user' fitted />
          Trending People
          </Menu.Item>
          </NavLink>

          <Menu.Item position='right'>            
          </Menu.Item>
          <Menu.Item id="noPadding" position='right'>
            <Form inverted>
              <Form.Group id='noMargin' inline >
                <Form.Field 
                  control={Radio}  
                  label='Movie'
                  value='1' 
                  checked={radioCheck==='1'} 
                  onChange={()=>handleRadio('1')}/>
                <Form.Field 
                  control={Radio}  
                  label='People'
                  value='2' 
                  checked={radioCheck==='2'} 
                  onChange={()=>handleRadio('2')} />

              <Form.Field onChange={(e)=>handleInput(e.target.value)} control={Input} value={search} placeholder='Search..' />
              <Form.Field>
                <NavLink to={`/${search}`}><Button onClick={async()=>{
                  movieSearch(search)
                  await handleInput("")
                }} 
                  basic inverted color='orange'>Search</Button></NavLink>
              </Form.Field>
              </Form.Group>
            </Form>
          </Menu.Item>
          </Menu>
        </Segment>
      </div>
    );
  
}


const reduxProps = state => {
  return{
    loading: state.loading,
    movieResults: state.results,
    people: state.people
  }
}
const dispatchRedux = dispatch => {
  return{
    getPopularData: () => getPopularData(),
    getHighRatedData: () => getHighRatedData(),
    getHighGrossingData: () => getHighGrossingData(),
    movieSearch: (search) => movieSearch(search),
    trendyPeople: () => trendyPeople()
  }
}

export default connect(reduxProps, dispatchRedux)(Navbar)