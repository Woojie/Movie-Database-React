import axios from 'axios'

export const getPopularData = () =>  dispatch => {
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1')
  .then( (res)=>{

  dispatch({
    type: "GET_ASYNC_DATA",
    payload: {
      results: res.data.results
    }
  })
  })
}

export const getHighRatedData = () =>  dispatch => {
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1')
  .then( (res)=>{

  dispatch({
    type: "GET_ASYNC_DATA",
    payload: {
      results: res.data.results
    }
  })
  })
}

export const getHighGrossingData = () =>  dispatch => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1')
  .then( (res)=>{

  dispatch({
    type: "GET_ASYNC_DATA",
    payload: {
      results: res.data.results
    }
  })
  })
}

export const movieSearch = query =>  dispatch => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c62a78a0d2d87be14d317940c5c290b5&query=${query}`)
  .then( (res)=>{

  dispatch({
    type: "GET_ASYNC_DATA",
    payload: {
      results: res.data.results.filter(movie => movie.vote_count > 75)
    }
  })
  })
}
