import React from 'react'

function Hero(props) {
  
  if(props.Hero === "Fire"){
    throw("Error! Not a hero")
  }
  return (
    <div>{props.Hero}</div>
  )
}

export default Hero