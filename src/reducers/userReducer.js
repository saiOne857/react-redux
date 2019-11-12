import ls from 'local-storage';

const userReducerState = ls.get('userReducer') || { userName: '', password: ''};

const userReducer = (state = userReducerState, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            let newState = Object.assign({}, state, { userName: action.data.userName, password: action.data.password});
            ls.set('userReducer', newState);
            return newState;
        case 'LOGOUT' :
            newState = Object.assign({}, state, { userName : '', password: ''});
            ls.set('userReducer', newState);
            return newState;
        default: return state
    }
}
export default userReducer;