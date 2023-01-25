import { combineReducers } from "redux";
import { toDoReducer } from "./toDoReducer";
import { filterReducer } from './filterReducer';
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        //! state name: reducer that will control it
        todosState: toDoReducer,
        filterState: filterReducer,
        //? ASYNC Example (login user)
        userState: userReducer
        //* We can add more states and reducers to include them in the store
    }
)