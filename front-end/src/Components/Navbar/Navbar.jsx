import React, { Component } from 'react';
import {Menu,Segment, Form, Input, Radio, Button, Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux'
import {getPopularData, getHighRatedData, getHighGrossingData, movieSearch} from '../../redux/store'

class Navbar extends Component {
  state={
    activeItem: '',
    radioCheck: 1,
    search:''
  }

  handleItemClick = (e, {name}) =>{this.setState({activeItem: name})}
  handleRadio = (e, {value})=>{this.setState({radioCheck: value})}
  handleInput = e =>{this.setState({search:e.target.value})}


  componentDidMount(){
    this.setState({activeItem:window.location.pathname})}

  render() {

    const {activeItem, radioCheck, search} = this.state
    console.log(search)
    return (
      <div className="App">
        <Segment inverted>
          <Menu inverted pointing secondary stackable>
          <NavLink onClick={this.props.getPopularData}  to='/'><Menu.Item 
            as='label'
            name='/' 
            active={activeItem === '/'} 
            onClick={this.handleItemClick} 
          >
            <Icon inverted color="orange" name='home' fitted />
            Home
          </Menu.Item></NavLink>

          <NavLink to='/HighRating' onClick={this.props.getHighRatedData}><Menu.Item 
            as='label'
            name='/HighRating' 
            active={activeItem === '/HighRating'} 
            onClick={this.handleItemClick}>
            <Icon inverted color='orange' name='star outline' fitted />
            Highest Rated
          </Menu.Item>
          </NavLink>

          <NavLink to='/HighGrossing' onClick={this.props.getHighGrossingData}><Menu.Item 
            name='/HighGrossing' 
            as='label'
            active={activeItem === '/HighGrossing'} 
            onClick={this.handleItemClick}>
            <Icon inverted color='green' name='dollar sign' fitted />
            Highest Grossing
            </Menu.Item>
          </NavLink>
          
          <NavLink to='/favorites'><Menu.Item 
            name='favorites' 
            as='label'
            active={activeItem === 'favorites'} 
            onClick={this.handleItemClick}>
            <Icon inverted color='green' name='favorite' fitted />
            Favorites
          </Menu.Item>
          </NavLink>

          <NavLink onClick={this.props.getPeopleData} to='/people/TrendyPeople'><Menu.Item 
            name='/TrendyPeople' 
            as='label'
            active={activeItem === '/TrendyPeople'} 
            onClick={this.handleItemClick}>
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
                  onChange={this.handleRadio}/>
                <Form.Field 
                  control={Radio}  
                  label='People'
                  value='2' 
                  checked={radioCheck==='2'} 
                  onChange={this.handleRadio} />

              <Form.Field onChange={this.handleInput} control={Input} value={search} placeholder='Search..' />
              <Form.Field>
                <NavLink to={`/${search}`}><Button onClick={async()=>{
                  this.props.movieSearch(search)
                  await this.setState({search:""})
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
}


const reduxProps = state => {
  return{
    loading: state.loading,
    movieResults: state.results
  }
}
const dispatchRedux = dispatch => {
  return{
    getPopularData: () => getPopularData(),
    getHighRatedData: () => getHighRatedData(),
    getHighGrossingData: () => getHighGrossingData(),
    movieSearch: (search) => movieSearch(search)
  }
}

export default connect(reduxProps, dispatchRedux)(Navbar)