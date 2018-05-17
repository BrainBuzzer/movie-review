import React, { Component } from 'react'
import { connect } from 'react-redux'

class Movie extends Component {
  render () {
    const { id, title, image, redirect } = this.props

    return (
      <div className="tile" onClick={() => redirect(id)}>
        <div className="tile__media">
          <img className="tile__img" src={image} alt={title} />
        </div>
        <div className="tile__details">
          <div className="tile__title">
            {title}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ movies }, { id }) {
  let movie = movies[id]
  return {
    title: movie.title,
    image: movie.cover_image
  }
}

export default connect(mapStateToProps)(Movie)
