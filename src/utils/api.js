import { _getMovies, _getReviews, _saveUserRating, _toggleWatch, _saveUserReview } from './_DATA'

export function getInitialData () {
  return Promise.all([
    _getMovies(),
    _getReviews()
  ]).then(([movies, reviews]) => ({
    movies,
    reviews
  }))
}

export function saveUserRating (rating) {
  return _saveUserRating(rating)
}

export function saveUserReview (review) {
  return _saveUserReview(review)
}

export function toggleWatch (id) {
  return _toggleWatch(id)
}
