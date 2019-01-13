
export const startAsyncMovieDetails = () => ({
  type: 'START_ASYNC_MOVIE_DETAILS'
})

export const finishAsyncMovieDetails = (results, scrape, cast, crew, similar, backdrop) => ({
  type: 'FINISH_ASYNC_MOVIE_DETAILS',
  payload: {
    results,
    scrape, 
    cast, 
    crew,
    similar,
    backdrop,
  }
})

export const startAsyncPeopleDetails = () => ({
  type: 'START_ASYNC_PEOPLE_DETAILS'
})

export const finishAsyncPeopleDetails = results => ({
  type: 'FINISH_ASYNC_PEOPLE_DETAILS',
  payload: {
    results
  }
})