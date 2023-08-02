import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    task: {},
    error: null
};

export const TaskContext = createContext(INITIAL_STATE);

const TaskReducer = (state, action) => {
    switch(action.type) {
        case "TASK_START":
            return {
                loading: true,
                task: {},
                error: null
            };

        case "TASK_SUCCESS":
            return {
                loading: false,
                task: action.payload,
                error: null
            };
        
        case "TASK_FAIL":
            return {
                loading: false,
                task: {},
                error: action.payload
            };

        case "TASK_UPDATE":
            return{
                loading: false,
                task: action.payload,
                error: null
            };

        default:
            return state;
    }
};

export const TaskContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TaskReducer, INITIAL_STATE);

    return (
        <TaskContext.Provider value={{ loading: state.loading, task: state.task, error: state.error, taskDispatch: dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}
