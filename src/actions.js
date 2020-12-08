import { ADD, DELETE, UPDATE } from './actionTypes';

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
