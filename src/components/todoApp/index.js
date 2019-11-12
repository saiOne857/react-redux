import React from 'react';
import { connect } from 'react-redux';

import Page from './../Page';
import Auth from './../Auth';
import Style from './todoApp.css';

import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.editTodo = this.editTodo.bind(this);
        this.todoCallback = this.todoCallback.bind(this);
        this.state = {
            edit: false,
            editTodo: null
        }
    }

    editTodo(todo) {
        this.setState({ edit : true, editTodo: todo})
    }

    todoCallback() {
        this.setState({
            edit: false,
            editTodo: null
        });
    }

    render() {
        const filteredTodos = this.props.todos.filter((todo) => !todo.completed);
        const completedTodos = this.props.todos.filter((todo) => todo.completed);
        return(<Auth>
            <Page>
                <div>
                    <h1>
                        Todo App
                    </h1>
                    <div className={Style.app_container}>
                        <div className={Style.leftPane}>
                            <div className={Style.action}>
                                Show Completed
                            </div>
                            <div className={Style.action} onClick={() => this.props.clearAll()}>
                                Clear All
                            </div>
                        </div>
                        <div className={Style.rightPane}>
                            <AddTodo
                                mode={ this.state.edit ? 'EDIT': 'ADD'}
                                todo={this.state.editTodo}
                                callback={this.todoCallback}
                                />
                            {
                                filteredTodos.map((todo, index) => {
                                    return (
                                        <TodoItem
                                            todo={todo}
                                            delete={ () => this.props.deleteTodo(index)}
                                            edit={ () => this.editTodo(todo)}
                                            completeTodo={ () => this.props.CompleteTodo(todo)}
                                        />
                                    )
                                })
                            }
                            <h1> Completed </h1>
                            {
                                completedTodos.map((todo, index) => {
                                    return (
                                        <TodoItem
                                            todo={todo}
                                            delete={ () => this.props.deleteTodo(index)}
                                            isCompleted={true}
                                            UnCompleteTodo={() => this.props.UnCompleteTodo(todo)}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </Page>
        </Auth>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : () => {
            dispatch({
                type: 'ADD_TODO',
                todo : Todo
            })
        },
        clearAll : () => {
            dispatch({
                type: 'CLEAR_ALL'
            })
        },
        deleteTodo : (index) => {
            dispatch({
                type: 'DELETE_TODO',
                index: index
            })
        },
        CompleteTodo : (todo) => {
            dispatch({
                type: 'COMPLETE_TODO',
                todo: todo
            })
        },
        UnCompleteTodo : (todo) => {
            dispatch({
                type: 'UNCOMPLETE_TODO',
                todo: todo
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);


