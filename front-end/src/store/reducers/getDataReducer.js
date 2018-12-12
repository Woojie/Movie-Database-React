const defaultState = {
  loading: true,
  results: [],
}



export const getDataReducer = (state=defaultState, action)=>{
 if(action.type === "START_ASYNC_DATA"){
   return{
     ...state,
     loading: true
   }
 }else if(action.type === "FINISH_ASYNC_DATA"){
   return{
     ...state,
     loading: false,
     results: action.payload.results
   }

 }
 return{state}
}