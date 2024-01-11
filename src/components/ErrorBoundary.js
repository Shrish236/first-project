import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            text: ""
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true,
            text: error
        }
    }

  render() {
    if(this.state.hasError){
        return <h1>{this.state.text}</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary