import { ADD, DELETE, UPDATE, UPDATE_TAG, GET_TODOS } from './actionTypes';

export const addItem = (todo) => {
    return { 
        type: ADD,
        todo: todo
    };
}

export const deleteItem = (todo) => {
    return { 
        type: DELETE,
        todo: todo
    };
}

export const updateStatus = (todo) => {
    return {
        type: UPDATE,
        todo: todo,
    };
}

export const updateTag = (todo) => {
    return {
        type: UPDATE_TAG,
        todo: todo,
    };
}

export const getTodoList = (todos) => {
    return {
        type: GET_TODOS,
        todos: todos,
    };
}
