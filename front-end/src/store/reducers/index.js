import {movieDetailsReducer} from './movieDetailsReducer'
import {getDataReducer} from './getDataReducer'
import {getPeopleDataReducer} from './getPeopleDataReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  movieDetailsReducer,
  getDataReducer,
  getPeopleDataReducer
})