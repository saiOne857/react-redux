const basicReducer = (state = { counter : 0}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return Object.assign({}, state, { userName: action.data.userName, password: action.data.password})
        default: return state
    }
}
export default basicReducer;