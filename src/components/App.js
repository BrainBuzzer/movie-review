import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Route } from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <div>
        <Route exact path='/' component={Home}></Route>
        <Route path='/movies/:id' component={Movie}></Route>
      </div>
    )
  }
}

export default connect()(App)
