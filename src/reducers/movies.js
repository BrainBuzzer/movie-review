import {
  GET_MOVIES,
  CHANGE_RATING,
  TOGGLE_WATCH
} from '../actions/movies'

export function movies (state = {}, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, ...action.movies}
    case CHANGE_RATING:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          user_rating: action.rating
        }
      }
    case TOGGLE_WATCH:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          status: state[action.id].status === 'watched' ? 'not-watched' : 'watched'
        }
      }
    default:
      return state
  }
}
