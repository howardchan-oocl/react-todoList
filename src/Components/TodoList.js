import React, { Component } from 'react';
import TodoGroupContainer from '../Containers/TodoGroupContainer';
import TodoGeneratorContainer from '../Containers/TodoGeneratorContainer';

class TodoList extends Component {
    render() {
        return (
            <div>
                TodoList
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;