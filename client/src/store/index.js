import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { watchAsyncData } from '../sagas/sagaActions'

import { allReducers } from '../reducers'
import { startAsyncPeopleDetails, finishAsyncPeopleDetails } from '../actions'

const SagaMiddleWare = createSagaMiddleware()

export const trendyPeople = () => {
  store.dispatch(startAsyncPeopleDetails())
  axios.get(`https://api.themoviedb.org/3/person/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`)
  .then((res)=>store.dispatch(finishAsyncPeopleDetails(res.data.results)))
}

const store = createStore(
  allReducers,
  applyMiddleware(SagaMiddleWare, thunk)
)

SagaMiddleWare.run(watchAsyncData)

export default store