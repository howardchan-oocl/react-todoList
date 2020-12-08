import { combineReducers } from 'redux';
import { ADD, DELETE, UPDATE } from './actionTypes';

const todo = (todoList = [], action) => {
    if (action.type === ADD) {
        return todoList.push(action.todo);
    }
    if (action.type === DELETE) {
        return todoList.splice(action.id);
    }
    if (action.type === UPDATE) {
        return todoList[action.id] = action.status;
    }
    return todo;
}

export default combineReducers(
    {
        todo
    }
)