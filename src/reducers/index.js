import { combineReducers } from 'redux'
import { movies } from './movies'
import { reviews } from './reviews'

export default combineReducers({ movies, reviews })
