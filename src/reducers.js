import { ADD, DELETE, UPDATE, UPDATE_TAG, GET_TODOS } from './actionTypes';

const todoList = (todoList = [], action) => {
    if (action.type === ADD) {
        return todoList.concat(action.todo);
    }
    if (action.type === DELETE) {
        return todoList.filter(todo => todo.id !== action.todo.id);
    }
    if (action.type === UPDATE) {
        return todoList.map(todo => todo.id === action.todo.id ? { ...todo, done: !todo.done } : todo);
    }
    if (action.type === UPDATE_TAG) {
        return todoList.map(todo => todo.id === action.todo.id ? { ...todo, tags: action.todo.tags } : todo);
    }
    if (action.type === GET_TODOS) {
        return [].concat(action.todos);
    }
    return todoList;
}

export default todoList;