import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    tasks: [],
    error: null
}

export const TasksContext = createContext(INITIAL_STATE);

const TasksReducer = (state, action) => {
    switch(action.type) {
        case "TASKS_START":
            return {
                loading: true,
                tasks: [],
                error: null
            };

        case "TASKS_SUCCESS":
            return {
                loading: false,
                tasks: action.payload,
                error: null
            };

        case "TASKS_FAIL":
            return {
                loading: false,
                tasks: [],
                error: action.payload
            }

        default:
            return state
    }
};

export const TasksContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TasksReducer, INITIAL_STATE);

    return(
        <TasksContext.Provider value={{ loading: state.loading, allTasks: state.tasks, error: state.error, tasksDispatch: dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}