import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk'
import TodosReducer from "./reducers/TodosReducer";

const store = createStore(
    TodosReducer,
    applyMiddleware(
        thunk,
            createLogger({
                collapsed: true,
            }
        )
    )
);

export default store;