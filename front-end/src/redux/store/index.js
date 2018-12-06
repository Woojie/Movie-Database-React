import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import axios from 'axios'


const StartAsyncData = 'START_ASYNC_DATA'
const FinishAsyncData = 'FINISH_ASYNC_DATA'
const StartAsyncMovieDetails = 'START_ASYNC_MOVIE_DETAILS'
const FinishAsyncMovieDetails = 'FINISH_ASYNC_MOVIE_DETAILS'

export const startAsyncData = () => ({
  type: StartAsyncData
})

export const finishAsyncData = results => ({
  type: FinishAsyncData,
  payload: {
    results
  }
})

export const startAsyncMovieDetails = () => ({
  type: StartAsyncMovieDetails
})

export const finishAsyncMovieDetails = results => ({
  type: FinishAsyncMovieDetails,
  payload: {
    results
  }
})


export const getPopularData = () => {
  store.dispatch(startAsyncData())
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1')
  .then((res)=> store.dispatch(finishAsyncData(res.data.results)))
}

export const getHighRatedData = () => {
  store.dispatch(startAsyncData())
  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`)
  .then((res)=>store.dispatch(finishAsyncData(res.data.results)))
}

export const getHighGrossingData = () => {
  store.dispatch(startAsyncData())
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1')
  .then((res)=>store.dispatch(finishAsyncData(res.data.results)))
}

export const movieSearch = (query) => {
  store.dispatch(startAsyncData())
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&query=${query}`)
  .then((res)=>store.dispatch(finishAsyncData(res.data.results.filter((movie)=>{return movie.vote_count > 75}))))
}

export const movieDetails = (id) => {
  store.dispatch(startAsyncMovieDetails())
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c62a78a0d2d87be14d317940c5c290b5`)
  .then((res)=>store.dispatch(finishAsyncMovieDetails(res.data)))
}

const initialState = {
  loading: true,
  results: [],
  movieDetail: []
}

const getDataReducer = (state=initialState, action)=>{
 if(action.type === StartAsyncData){
   return{
     ...state,
     loading: true
   }
 }else if(action.type === FinishAsyncData){
   return{
     ...state,
     loading: false,
     results: action.payload.results
   }
 }else if(action.type === StartAsyncMovieDetails){
   return{
     ...state,
     loading: true
   }
 }else if(action.type === FinishAsyncMovieDetails){
   return{
     ...state,
     loading: false,
     movieDetail: action.payload.results
   }
 }
 return{state}
}



const store = createStore(
  getDataReducer,
  applyMiddleware(logger)
)

export default store