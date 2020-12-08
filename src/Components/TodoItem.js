import React, { Component } from 'react';

class TodoItem extends Component {
    onClickToUpdate = (event) => {
        this.props.updateStatus(this.props.todo);
    }

    onClickToDelete = (event) => {
        this.props.deleteItem(this.props.todo);
    }

    render() {
        const cross = {
            textDecorationLine: this.props.todo.done ? 'line-through' : ''
        };

        return (
            <div>
                <button style={cross} onClick={this.onClickToUpdate}>{this.props.todo.text}</button>
                <button onClick={this.onClickToDelete}>X</button>
            </div>
        );
    }
}

export default TodoItem;