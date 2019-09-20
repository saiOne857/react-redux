const basicReducer = (state = { counter : 0}, action) => {
  debugger;
  switch(action.type) {
   case 'INCREMENT': return Object.assign({}, state, { counter: state.counter+1})
   default: return state
  }
 }
 export default basicReducer;