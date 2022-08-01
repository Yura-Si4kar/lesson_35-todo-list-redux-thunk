import {ADD_TODO, DELETE_TODOS, SET_LIST, TODOS_SET_LOADING, TODOS_UPDATE_TODO } from "../actions/TodosActions";

const initialValue = {
    isLoading: false,
    list: [],
}

function updateTodo(state, updateTodo) {
    return {
        ...state,
        list: state.list.map((item) =>
            item.id !==updateTodo.id
                ? item
                : updateTodo,
        ),
    }
}

function deleteTodo(state, id) {
    return {
        ...state,
        list: state.list.filter((item) => item.id !== id),
    }
}

function addNewTitle(state, newTitle) {
    return {
        ...state,
        list: [...state.list,
            { ...newTitle, id: Date.now(), isDone: false }],
    }
}

export default function TodosReducer(state = initialValue, { type, payload }) {
    switch (type) {
        case TODOS_UPDATE_TODO:
            return updateTodo(state, payload);
        case DELETE_TODOS:
            return deleteTodo(state, payload);
        case ADD_TODO:
            return addNewTitle(state, payload);
        case SET_LIST:
            return {...state, list: payload};
        case TODOS_SET_LOADING:
            return {...state, isLoading: payload};
        default:
            return state;
    }
}