const company = {
  movieResults: [],
}

export const companyReducer = (state=company, action) => {
if (action.type === "GET_PROD") {
    return {
      ...state,
      movieResults: action.payload.movies,
      name: action.payload.name,
      logo: action.payload.logo,
      hq: action.payload.hq,
      homepage: action.payload.homepage,
      
    }
  }
  return state
}