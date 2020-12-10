import { ADD, DELETE, UPDATE, GET_TODOS, ADD_LABEL, GET_LABELS, DELETE_LABEL } from './actionTypes';

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

export const update = (todo) => {
    return {
        type: UPDATE,
        todo: todo,
    };
}

export const getTodoList = (todos) => {
    return {
        type: GET_TODOS,
        todos: todos,
    };
}

export const addLabel = (label) => {
    return {
        type: ADD_LABEL,
        label: label,
    };
}

export const getLabels = (labels) => {
    return {
        type: GET_LABELS,
        labels: labels,
    };
}

export const deleteLabel = (label) => {
    return {
        type: DELETE_LABEL,
        label: label,
    };
}