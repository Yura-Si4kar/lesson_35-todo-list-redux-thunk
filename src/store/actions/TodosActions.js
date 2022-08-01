import { addTodosItem, deleteItem, getTodosList, switchTodosClass } from "../../api";
import { createAction } from "../../urils";

export const TODOS_SET_LOADING = 'TODOS_SET_LOADING';
export const setLoading = createAction(TODOS_SET_LOADING);

export const TODOS_UPDATE_TODO = 'TODOS_UPDATE_TODO';
export const updateTodo = createAction(TODOS_UPDATE_TODO);

export const DELETE_TODOS = 'DELETE_TODOS';
export const deleteTodo = createAction(DELETE_TODOS);

export const ADD_TODO = 'ADD_TODO';
export const addTodo = createAction(ADD_TODO);

export const SET_LIST = 'SET_LIST';
export const setTododsList = createAction(SET_LIST);


export const getList = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    getTodosList().then((data) => dispatch(setTododsList(data)))
        .finally(() => {
            dispatch(setLoading(false))
        });
}


export const toggleTodo = (id) => (dispatch, getState) => {
    const { list } = getState();
    const item = list.find((todo) => todo.id === id);
    const updatedItem = { ...item, isDone: !item.isDone };
    dispatch(setLoading(true));
    switchTodosClass(updatedItem).then(() => dispatch(updateTodo(updatedItem)))
        .finally(() => {
            dispatch(setLoading(false))
        });
}

export const remuveTodo = (id) => (dispatch, getState) => {
    dispatch(setLoading(true));
    deleteItem(id).then(() => dispatch(deleteTodo(id)))
        .finally(() => {
            dispatch(setLoading(false))
        });
}

export const addNewTitle = (newTitle) => (dispatch, getState) => {
    const newItem = { ...newTitle, isDone: false, };
    dispatch(setLoading(true));
    addTodosItem(newItem).then(() => dispatch(addTodo(newItem)))
        .finally(() => {
            dispatch(setLoading(false))
        });
}