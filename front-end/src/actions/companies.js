

export const startGetProductionCompany = () => {
  return {
    type: "START_PROD"
  }
}

export const finishGetProductionCompany = results => {
  return {
    type: "FINISH_PROD",
    payload: results
  }
}