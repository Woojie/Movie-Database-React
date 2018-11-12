import React, { Component } from 'react';
import {Menu,Segment, Form, Input, Radio, Button, Icon, Label} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class App extends Component {
  state={
    activeItem: 'home',
    radioCheck: 1
  }

  handleItemClick = (e, {name}) =>{this.setState({activeItem: name})}
  handleRadio = (e, {value})=>{this.setState({radioCheck: value})}

  render() {
    const {activeItem, radioCheck} = this.state
    return (
      <div className="App">
        <Segment inverted>
          <Menu inverted pointing secondary stackable>
          <NavLink to='/'><Menu.Item 
            as='label'
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} 
          >
            <Icon name='home' fitted />
            Home
          </Menu.Item></NavLink>

          <NavLink to='/HighRating'><Menu.Item 
            as='label'
            name='highest rated' 
            active={activeItem === 'highest rated'} 
            onClick={this.handleItemClick}>
            <Icon name='star outline' fitted />
            Highest Rated
          </Menu.Item>
          </NavLink>

          <NavLink to='/HighGrossing'><Menu.Item 
            name='highest grossing' 
            as='label'
            active={activeItem === 'highest grossing'} 
            onClick={this.handleItemClick}>
            <Icon name='dollar sign' fitted />
            Highest Grossing
            </Menu.Item>
          </NavLink>
          
          <NavLink to='/favorites'><Menu.Item 
            name='favorites' 
            as='label'
            active={activeItem === 'favorites'} 
            onClick={this.handleItemClick}>
            <Icon name='favorite' fitted />
            Favorites
          </Menu.Item>
          </NavLink>

          <NavLink to='/TrendyPeople'><Menu.Item 
            name='trending people' 
            as='label'
            active={activeItem === 'trending people'} 
            onClick={this.handleItemClick}>
          <Icon name='user' fitted />
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

              <Form.Field control={Input} placeholder='Search..' />
              <Form.Field><Button basic inverted color='orange'>Search</Button></Form.Field>
              </Form.Group>
            </Form>
          </Menu.Item>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default App;
