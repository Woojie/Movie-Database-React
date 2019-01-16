import { tmdb } from '../api/tmdb'
import axios from 'axios';

export const getProductionCompany = id => dispatch => {

  axios.all(
    [ 
      tmdb.get(`company/${id}?api_key=c62a78a0d2d87be14d317940c5c290b5`),
      tmdb.get(`discover/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&page=1&with_companies=${id}&sort_by=vote_count.desc`),

    ]
  )
 
  .then(axios.spread((details, movies) => {

    dispatch({
      type: "GET_PROD",
      payload: {
        movies: movies.data.results,
        logo: details.data.logo_path,
        name: details.data.name,
        hq: details.data.headquarters,
        homepage: details.data.homepage
      }
    })
  }))
}


