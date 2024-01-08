import React, { Component } from 'react'
// import { useState } from 'react';
import './styles.css'
class Message extends Component {

  constructor(){
    super()
    this.state = {
        count: 0
    }
  }
  clickHandler(){
    this.setState({
        count : this.state.count + 5
    })
  }
    
  render() {
    return (
      <div>
        <button onClick={() => this.clickHandler()}>
           <h1 className='temp'>Click me count: {this.state.count}</h1> 
        </button>
        <h1 className='temp'>Click me count: {this.state.count}</h1> 
      </div>
    )
  }
}

export default Message;
