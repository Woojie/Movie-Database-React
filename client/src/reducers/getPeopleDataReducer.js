const peopleState = {
  people: [],
  loading: false
}
export const getPeopleDataReducer = (state=peopleState, action) =>{

  if(action.type === "START_ASYNC_PEOPLE_DETAILS"){
    return{
      ...state,
      loading: true
    }
  }else if(action.type === "FINISH_ASYNC_PEOPLE_DETAILS"){
    return{
      ...state,
      loading: false,
      people: action.payload.results
    }
  }
  return state
}
