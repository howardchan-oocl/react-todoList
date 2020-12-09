import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    onClickToUpdate = () => {
        this.props.updateStatus(this.props.todo);
    }

    onClickToDelete = () => {
        this.props.deleteItem(this.props.todo);
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