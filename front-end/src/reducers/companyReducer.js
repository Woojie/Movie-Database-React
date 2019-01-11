const company = {
  companyLoading: false,
  companyResults: []
}

export const companyReducer = (state=company, action) => {
  if(action.type === "START_PROD") {
    return {
      ...state,
      companyLoading: true
    }
  }else if (action.type === "FINISH_PROD") {
    return {
      ...state,
      companyResults: action.payload,
      companyLoading: false
    }
  }
  return state
}