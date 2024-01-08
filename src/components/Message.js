import React, { Component } from 'react'
// import { useState } from 'react';

class Message extends Component {

  clickHandler(){
    console.log("Clicked")
  }
    
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
            Click me
        </button>
      </div>
    )
  }
}

export default Message;
