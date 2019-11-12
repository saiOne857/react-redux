import React from 'react';
import Styles from './todoItem.css';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import UndoIcon from '@material-ui/icons/Undo';

const Todo = {
    id : 123,
    description : "What to do",
    createdOn: 234234234,
    completed: true
}
const TodoItem = (props) => {

    return(
        <Paper className={Styles.item} key={props.todo.id} >
            <div className={Styles.text}>
                {props.todo.description}
            </div>
            <div className={Styles.actions}>
                {
                    !props.isCompleted && <IconButton onClick={() => props.edit()}>
                        <EditIcon />
                    </IconButton>
                }
                <IconButton onClick={() => props.delete()} >
                    <DeleteIcon />
                </IconButton>
                {
                    !props.isCompleted && <IconButton onClick={() => props.completeTodo()}>
                    <DoneIcon />
                </IconButton>
                }
                {
                    props.isCompleted && <IconButton onClick={ () => props.UnCompleteTodo()}>
                            <UndoIcon />
                        </IconButton>
                }
            </div>
        </Paper>
    );
}

export default TodoItem;