import React, { Component } from 'react';
import {Menu,Segment, Form, Input, Radio, Button} from 'semantic-ui-react'

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
          <Menu.Item 
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item 
            name='highest rated' 
            active={activeItem === 'highest rated'} 
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            name='highest grossing' 
            active={activeItem === 'highest grossing'} 
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            name='favorites' 
            active={activeItem === 'favorites'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item 
            name='trending people' 
            active={activeItem === 'trending people'} 
            onClick={this.handleItemClick} 
          />
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
              <Form.Field control={Button}>Search</Form.Field>
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
