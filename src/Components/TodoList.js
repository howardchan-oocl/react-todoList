import React, { Component } from 'react';
import TodoGroupContainer from '../Containers/TodoGroupContainer';
import TodoGeneratorContainer from '../Containers/TodoGeneratorContainer';

class TodoList extends Component {
    render() {
        return (
            <div>
                TodoList1
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;