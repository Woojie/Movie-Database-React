const company = {
  companyResults: []
}

export const companyReducer = (state=company, action) => {
if (action.type === "GET_PROD") {
    return {
      ...state,
      companyResults: action.payload,
    }
  }
  return state
}