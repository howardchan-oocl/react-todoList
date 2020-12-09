import React, { Component } from 'react';
import './TodoItem.css';
import { updateTodo, deleteTodo } from '../apis/todos';

class TodoItem extends Component {
    onClickToUpdate = () => {
        updateTodo(this.props.todo.id, { ...this.props.todo, done: !this.props.todo.done }).then(response => {
            this.props.updateStatus(response.data);
        })
    }

    onClickToDelete = () => {
        deleteTodo(this.props.todo.id).then(response => {
            this.props.deleteItem(response.data);
        })
    }

    render() {
        return (
            <div>
                <button className={this.props.todo.done ? 'cross' : ''} onClick={this.onClickToUpdate}>{this.props.todo.text}</button>
                <button onClick={this.onClickToDelete}>X</button>
            </div>
        );
    }
}

export default TodoItem;