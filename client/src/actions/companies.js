import { tmdb } from '../api/tmdb'

export const getProductionCompany = () => dispatch => {
  tmdb.get('person/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1')
  .then((res)=> {
    dispatch({
      type: "GET_PROD",
      payload: {
        results: res.data.results
      }
    })
  })
}

