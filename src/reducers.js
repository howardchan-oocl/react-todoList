import { ADD, DELETE, UPDATE } from './actionTypes';

const todoList = (todoList = [], action) => {
    if (action.type === ADD) {
        return todoList.concat(action.todo);
    }
    if (action.type === DELETE) {
        return todoList.filter(todo => todo.id !== action.todo.id);
    }
    if (action.type === UPDATE) {
        return todoList.map(todo=>{
            if(todo.id===action.todo.id){
                todo.done=!todo.done;
                return todo;
            }
            return todo;
        })
    }
    return todoList;
}

export default todoList;