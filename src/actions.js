import { ADD, DELETE, UPDATE } from './actionTypes';

export const addItem = (todo) => {
    return { 
        type: ADD,
        todo: todo
    };
}

export const deleteItem = (id) => {
    return { 
        type: DELETE,
        id: id
    };
}

export const updateStatus = (id, status) => {
    return {
        type: UPDATE,
        id: id,
        status: status
    };
}
