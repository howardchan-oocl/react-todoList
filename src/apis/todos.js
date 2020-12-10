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

export const getLabels = () => {
    return api.get("/labels");
}

export const addLabel = (content,color) => {
    return api.post(`/labels/`, {content, color});
}

export const deleteLabel = (id) => {
    return api.delete(`/labels/${id}`);
}