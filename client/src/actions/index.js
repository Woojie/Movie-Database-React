
export const startAsyncPeopleDetails = () => ({
  type: 'START_ASYNC_PEOPLE_DETAILS'
})

export const finishAsyncPeopleDetails = results => ({
  type: 'FINISH_ASYNC_PEOPLE_DETAILS',
  payload: {
    results
  }
})