import { getMovies } from './movies'
import { getReviews } from './reviews'
import { getInitialData } from '../utils/api'

export const handleInitialData = () => (dispatch) => (
  getInitialData().then(({ movies, reviews }) => {
    dispatch(getMovies(movies))
    dispatch(getReviews(reviews))
  })
)
