import { saveUserRating, toggleWatch } from '../utils/api'

export const GET_MOVIES = 'GET_MOVIES'
export const CHANGE_RATING = 'CHANGE_RATING'
export const TOGGLE_WATCH = 'TOGGLE_WATCH'

export function getMovies (movies) {
  return {
    type: GET_MOVIES,
    movies
  }
}

function changeRating ({ id, rating }) {
  return {
    type: CHANGE_RATING,
    id,
    rating
  }
}

export function handleChangeRating (rating) {
  return (dispatch) => (
    saveUserRating(rating).then((res) => {
      dispatch(changeRating(rating))
    })
  )
}

function toggle (id) {
  return {
    type: TOGGLE_WATCH,
    id
  }
}

export function handleToggle (id) {
  return (dispatch) => (
    toggleWatch(id).then(() => {
      dispatch(toggle(id))
    })
  )
}
