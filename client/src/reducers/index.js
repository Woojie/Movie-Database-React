import { combineReducers } from 'redux'

import { movieDetailsReducer } from './movieDetailsReducer'
import { getDataReducer } from './getDataReducer'
import { getPeopleDataReducer } from './getPeopleDataReducer'
import { companyReducer } from './companyReducer'


export const allReducers = combineReducers({
  movieDetailsReducer,
  getDataReducer,
  getPeopleDataReducer, 
  companyReducer,
})