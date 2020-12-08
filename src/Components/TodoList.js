import React, { Component } from 'react';
import TodoGroupContainer from '../Containers/TodoGroupContainer';
import TodoGeneratorContainer from '../Containers/TodoGeneratorContainer';
import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';

class TodoList extends Component {
    render() {
        return (
            <div>
                TodoList
                <TodoGroup />
                <TodoGenerator />
            </div>
        );
    }
}

export default TodoList;