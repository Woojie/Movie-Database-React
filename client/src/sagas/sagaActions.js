import { takeLatest, call, put } from 'redux-saga/effects'
import { getPeopleData } from './sagaApi'

function* getAsyncSagaData(){
  const results = yield call(getPeopleData)
  yield put({
    type:"TRY_SAGA_ASYNC",
    data: results.data.results
})
}

export const clickMe = () => ({type: "GET_DATA_SAGA"})

export function* watchAsyncData() {
  yield takeLatest("GET_DATA_SAGA", getAsyncSagaData)
}