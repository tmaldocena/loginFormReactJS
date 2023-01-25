import React from 'react'
import { connect } from 'react-redux'
import ToDoList from '../pure/ToDoList'

import { toggleToDo } from '../../store/actions/actions'

//* Filter ToDos list
const filterToDos = (todos, filter) =>{
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterToDos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToDoClick: (id) =>{
            dispatch(toggleToDo(id));
        }
    }
}

//* We connect state & dispatch to ToDoList's Props
const ToDosContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDosContainer;