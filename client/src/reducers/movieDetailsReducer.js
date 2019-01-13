
const movieDetailState = {
  movieDetail: undefined,
  scrapedData: undefined,
  similar: undefined,
  backdrop: undefined
}

export const movieDetailsReducer = (state=movieDetailState, action) => {
if (action.type === undefined) {
  return {
    ...state,
    movstateieDetail: undefined,
    scrapedData: undefined,
    similar: undefined,
    backdrop: undefined
  }

}else if(action.type === 'GET_MOVIE_DETAILS'){
    return{
      ...state,
      movieDetail: action.payload.details,
      scrapedData: action.payload.googleRes,
      cast: action.payload.cast,
      crew: action.payload.crew,
      similar: action.payload.similarMovies,
      backdrop: action.payload.backdrop,
      videos: action.payload.videos,
    }
  }
  return state
}