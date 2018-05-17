import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import MovieTile from './MovieTile'
import '../style/carousel.css'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      redirect: false,
      id: null
    }

    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleRedirect (id) {
    this.setState(() => ({
      redirect: true,
      id
    }))
  }

  render () {
    const { redirect, id } = this.state
    if (redirect) {
      return <Redirect to={`/movies/${id}`} />
    }

    const { movieId } = this.props

    return (
      <div className='movie-carousel'>
        <div className='row'>
          <div className="row__inner">
            { movieId.map((key) => (
              <MovieTile id={key} redirect={this.handleRedirect}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = ({ movies }) => {
  return {
    movieId: Object.keys(movies)
  }
}

export default connect(mapStateToProps)(Home)
