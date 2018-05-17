export const GET_REVIEWS = 'GET_REVIEWS'

export function getReviews (reviews) {
  return {
    type: GET_REVIEWS,
    reviews
  }
}
