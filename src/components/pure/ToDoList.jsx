import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

const ToDoList = ({ todos, onToDoClick }) => {
    return (
        <div>
            <h1>Your ToDo's</h1>
            <ul>
                {todos.map((todo, index) =>
                    (
                        <ToDo key={index}
                            {...todo}
                            onClick={() => onToDoClick(todo.id)}
                        >
                        </ToDo>
                    )
                )}
            </ul>
        </div>
    );
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onToDoClick: PropTypes.func.isRequired
}

export default ToDoList;
