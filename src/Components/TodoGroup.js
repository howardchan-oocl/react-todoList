import React, { Component } from 'react';
import TodoItemContainer from '../Containers/TodoItemContainer';
import { v4 as uuidv4 } from 'uuid';

class TodoGroup extends Component {
    render() {
        const todoItem = this.props.todoList.map((todo)=>(
            <TodoItemContainer key={todo.id} todo={todo}/>
        ));

        return (
            <div>
                {todoItem}
            </div>
        );
    }
}

export default TodoGroup;