const peopleState = {
  people: [],
  loading: false
}

export const getSagaPeopleDataReducer = (state=peopleState, action) =>{

  if(action.type === "TRY_SAGA_ASYNC"){
    return{
      ...state,
      loading: false,
      people: action.data
    }
  }
  return state
}
