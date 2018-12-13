export const startAsyncData = () => ({
  type: 'START_ASYNC_DATA'
})

export const finishAsyncData = results => ({
  type: 'FINISH_ASYNC_DATA',
  payload: {
    results
  }
})

export const startAsyncMovieDetails = () => ({
  type: 'START_ASYNC_MOVIE_DETAILS'
})

export const finishAsyncMovieDetails = (results, scrape, cast, crew, similar) => ({
  type: 'FINISH_ASYNC_MOVIE_DETAILS',
  payload: {
    results,
    scrape, 
    cast, 
    crew,
    similar,
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