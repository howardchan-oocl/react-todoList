import React, { Component } from 'react';

class TodoItem extends Component {
    onClick1 = (event) => {
        this.props.updateStatus(this.props.todo);
    }

    onClick2 = (event) => {
        this.props.deleteItem(this.props.todo);
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick1}>{this.props.todo.text}</button>
                <button onClick={this.onClick2}>X</button>
            </div>
        );
    }
}

export default TodoItem;