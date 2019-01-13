import axios from 'axios'

import { tmdb } from '../api/tmdb'

export const getMovieDetails = id => dispatch => {
  tmdb.get(`/3/movie/${id}?api_key=c62a78a0d2d87be14d317940c5c290b5`)
  .then((detailsResponse)=>{
    axios.post('http://localhost:3030/', {title: detailsResponse.data.title, date: detailsResponse.data.release_date})
    .then((googleResponse)=>{
      axios.all(
      [
        tmdb.get(`/3/movie/${id}?api_key=c62a78a0d2d87be14d317940c5c290b5&append_to_response=credits`),
        tmdb.get(`/3/movie/${id}/similar?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1`),
        tmdb.get(`/3/movie/${id}/images?api_key=c62a78a0d2d87be14d317940c5c290b5`)
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
        console.log(details)
        dispatch({
          type: "GET_MOVIE_DETAILS",
          payload: {
            details, 
            googleRes, 
            cast, 
            crew,
            similarMovies,
            backdrop
          }
        })
      })) 
      })
  })
}
