import { ADD, DELETE, UPDATE, GET_TODOS } from './actionTypes';

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

export default todoList;