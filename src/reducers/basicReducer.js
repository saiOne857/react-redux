const basicReducer = (state = { counter : 0}, action) => {
  debugger;
  switch(action.type) {
   case 'INCREMENT': 
    return Object.assign({}, state, { counter: state.counter+1})
   case 'RECEIVED_POSTS':
    return Object.assign({}, state, { posts: action.posts})
   default: return state
  }
 }
 export default basicReducer;