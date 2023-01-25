import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

//* Initial ToDoState
//* Initial ToDo's empty
let initialState = [];

export const toDoReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false,
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )
        default:
            return state;
    }
} 