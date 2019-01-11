
const movieDetailState = {
  loading: true,
  movieDetail: [],
  scrapedData: [],
  similar: [],
  backdrop: []
}

export const movieDetailsReducer = (state=movieDetailState, action) => {
  if(action.type === 'START_ASYNC_MOVIE_DETAILS'){
    return{
      ...state,
      loading: true,
      movieDetail: undefined,
      scrapedData: undefined,
      cast: undefined,
      crew: undefined,
      similar: undefined,
    }
  }else if(action.type === 'FINISH_ASYNC_MOVIE_DETAILS'){
    return{
      ...state,
      loading: false,
      movieDetail: action.payload.results,
      scrapedData: action.payload.scrape,
      cast: action.payload.cast,
      crew: action.payload.crew,
      similar: action.payload.similar,
      backdrop: action.payload.backdrop
    }
  }
  return state
}