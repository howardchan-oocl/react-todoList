import { ADD, DELETE, UPDATE, GET_TODOS, ADD_LABEL, GET_LABELS, DELETE_LABEL } from './actionTypes';
import { combineReducers } from 'redux';

const todoList = (todoList = [], action) => {
    if (action.type === ADD) {
        return todoList.concat(action.todo);
    }
    if (action.type === DELETE) {
        return todoList.filter(todo => todo.id !== action.todo.id);
    }
    if (action.type === UPDATE) {
        return todoList.map(todo => todo.id === action.todo.id ? action.todo : todo);
    }
    if (action.type === GET_TODOS) {
        return [].concat(action.todos);
    }
    return todoList;
}

const labels = (labels = [], action) => {
    if (action.type === ADD_LABEL) {
        return labels.concat(action.label);
    }
    if (action.type === GET_LABELS) {
        return [].concat(action.labels);
    }
    if (action.type === DELETE_LABEL) {
        return labels.filter(label => label.id !== action.label.id);
    }
    return labels;
}

export default combineReducers(
    {
        todoList,
        labels
    }
)