import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import axios from 'axios'

import { allReducers } from './reducers'
import { startAsyncData, finishAsyncData, startAsyncMovieDetails, startAsyncPeopleDetails, finishAsyncMovieDetails, finishAsyncPeopleDetails} from './actions'
import { startGetProductionCompany, finishGetProductionCompany } from './actions/companies'



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
  .then((detailsResponse)=>{
    axios.post('http://localhost:3030/', {title: detailsResponse.data.title, date: detailsResponse.data.release_date})
    .then((googleResponse)=>{
      axios.all(
      [
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c62a78a0d2d87be14d317940c5c290b5&append_to_response=credits`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c62a78a0d2d87be14d317940c5c290b5`)
      ]
      )
      .then(axios.spread((castAndCrew, similarMovies, backdropImages)=>{
        let details = detailsResponse.data,
        googleRes = googleResponse.data,
        crew = castAndCrew.data.credits.crew.splice(0,10),
        cast = castAndCrew.data.credits.cast.splice(0,10),
        backdrop = backdropImages.data.backdrops

        similarMovies = similarMovies.data.results.length >= 5 ? similarMovies.data.results.splice(0, 5)
        : similarMovies.data.results
        store.dispatch(finishAsyncMovieDetails(details, googleRes, cast, crew, similarMovies, backdrop ))
      })) 
      })

  })
}

export const trendyPeople = () => {
  store.dispatch(startAsyncPeopleDetails())
  axios.get(`https://api.themoviedb.org/3/person/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`)
  .then((res)=>store.dispatch(finishAsyncPeopleDetails(res.data.results)))
}

export const getProductionCompany = (id) => {
  store.dispatch(startGetProductionCompany()) 
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&sort_by=popularity.desc&with_companies=${id}&page=1`)
  .then((res) => store.dispatch(finishGetProductionCompany(res.data.results)))
}



const store = createStore(
  allReducers,
  applyMiddleware(logger)
)

export default store