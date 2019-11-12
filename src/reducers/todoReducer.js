import ls from 'local-storage';
const defaultState = { todoList : [], counter: 0};
const todoReducerState = ls.get('todoReducer') || defaultState;

const todoReducer = (state = todoReducerState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            let list  = [...state.todoList];
            list.push(action.todo);
            let newState = Object.assign({}, state, { todoList : list, counter : list.length});
            ls.set('todoReducer', newState);
            return newState;
        case 'CLEAR_ALL':
            return defaultState;
        case 'DELETE_TODO':
            list = [...state.todoList];
            list.splice(action.index,1);
            newState = Object.assign({}, state, { todoList : list, counter : list.length});
            ls.set('todoReducer', newState);
            return newState;
        case 'EDIT_TODO':
            list = [...state.todoList];
            list = list.map((todo, index) => {
                if(todo.id === action.todo.id) {
                    return action.todo
                }
                return todo;
            });
            newState = Object.assign({}, state, { todoList : list, counter : list.length});
            ls.set('todoReducer', newState);
            return newState;
        case 'COMPLETE_TODO':
            list = [...state.todoList];
            list = list.map((todo, index) => {
                if(todo.id === action.todo.id) {
                    const todo = {...action.todo};
                    todo.completed = true;
                    return todo
                }
                return todo;
            });
            newState = Object.assign({}, state, { todoList : list, counter : list.length});
            ls.set('todoReducer', newState);
            return newState;
        case 'UNCOMPLETE_TODO':
            list = [...state.todoList];
            list = list.map((todo, index) => {
                if(todo.id === action.todo.id) {
                    const todo = {...action.todo};
                    todo.completed = false;
                    return todo
                }
                return todo;
            });
            newState = Object.assign({}, state, { todoList : list, counter : list.length});
            ls.set('todoReducer', newState);
            return newState;
        default: return state;
    }
}
export default todoReducer;