import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleChangeRating } from '../actions/movies'

class Movie extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (e) {
    this.props.dispatch(handleChangeRating({
      id: this.props.movie.id,
      rating: e.target.value
    }))
  }

  render () {
    const { movie } = this.props
    return (
      <div className='container'>
        { !movie ? 'Loading' : (
          <div style={{
            backgroundImage: `url(${movie.background_image})`,
            backgroundSize: 'cover'
          }}>
            <div className='four columns'>
              <img src={movie.cover_image} alt={movie.title + ' Poster'}/>
            </div>
            <div className='eight columns'>
              <h1>{movie.title}</h1>
              <select name="options" onChange={this.submit} id="opt">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps ({ movies }, { match }) {
  let movie = movies[match.params.id]
  return {
    movie
  }
}

export default connect(mapStateToProps)(Movie)
