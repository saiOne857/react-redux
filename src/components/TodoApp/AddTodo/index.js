import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './addTodo.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';




class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.todoAction = this.todoAction.bind(this);
        this.state = {
            desc: ''
        }
    }

    handler(event) {
        if(event) {
            this.setState({
                desc : event.target.value
            });
        }
    }

    addTodo(e) {
        if(e && this.state.desc) {
            const desc = this.state.desc;
            this.props.addTodo(desc);
            this.setState({ desc : ''});
        }
    }

    editTodo(e) {
        if(e && this.state.desc && this.props.todo) {
            const todo = this.props.todo;
            todo.description = this.state.desc;
            this.setState({ desc: ''});
            this.props.editTodo(todo);
        }
    }

    shouldComponentUpdate(props) {
        if(props.mode != this.props.mode && props.mode === 'EDIT') {
            this.setState({ desc : props.todo.description});
        }

        return true;
    }

    todoAction(e) {
        if(e && this.props.mode === 'EDIT') {
            this.editTodo(e);
            this.props.callback();
        } else if(e){
            this.addTodo(e);
        }
    }

    clearAction(e) {
        if(e) {
            this.setState({
                desc: ''
            });
            this.props.callback();
        }
    }

    render() {
        return(
            <div className={Styles.holder}>
                <TextField
                    name="Description"
                    value={this.state.desc}
                    onChange={this.handler}
                    className={Styles.text}
                />
                <div className={Styles.action}>
                    {
                        this.props.mode === 'EDIT' ?
                            <IconButton onClick={ (e) => this.todoAction(e)}><EditIcon /></IconButton> :
                            <IconButton onClick={ (e) => this.todoAction(e)}><AddIcon /></IconButton>
                    }
                    <IconButton onClick={ (e) => this.clearAction(e)}>
                        <ClearIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}

AddTodo.propTypes = {
    mode: PropTypes.string.isRequired,
    todo: PropTypes.object,
    callback: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (desc) => {
            dispatch(
                {
                    type: 'ADD_TODO',
                    todo: {
                        id : new Date().getTime(),
                        description: desc,
                        createdOn: new Date().getTime(),
                        completed: false
                    }
                }
            )
        },
        editTodo : (todo) => {
            dispatch(
                {
                    type: 'EDIT_TODO',
                    todo: todo
                }
            )
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
