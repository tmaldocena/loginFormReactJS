import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../store/actions/actions'
import ToDoForm from '../pure/ToDoForm'

const mapStateToProps = (state) => ({
    //* Not necessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addToDo(text))
        }
    }
}

const ToDoFormContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoForm);   

export default ToDoFormContainer; 