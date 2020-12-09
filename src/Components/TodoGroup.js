import React, { Component } from 'react';
import { getTodoList } from '../apis/todos';
import TodoItemContainer from '../Containers/TodoItemContainer';

class TodoGroup extends Component {
    componentDidMount() {
        getTodoList().then(response => {
            this.props.getTodoList(response.data);
        });
    }

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