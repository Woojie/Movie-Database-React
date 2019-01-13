const defaultState = {
  loading: true,
  results: [],
}



export const getDataReducer = (state=defaultState, action)=>{
  if(action.type === "GET_ASYNC_DATA"){
   return{
     ...state,
     loading: false,
     results: action.payload.results
   }

 }
 return{state}
}