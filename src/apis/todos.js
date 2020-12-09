import api from './api';

export const getTodoList = () => {
    return api.get("/todos");
}

export const postTodo = (text) => {
    return api.post("/todos", {text});
}

export const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
}

export const updateTodo = (id, todo) => {
    return api.put(`/todos/${id}`, todo);
}