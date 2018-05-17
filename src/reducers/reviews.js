import { GET_REVIEWS } from '../actions/reviews'

export function reviews (state = {}, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return {...state, ...action.reviews}
    default:
      return state
  }
}
