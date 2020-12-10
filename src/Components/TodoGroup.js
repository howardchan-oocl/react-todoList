import React, { Component } from 'react';
import { getTodoList, getLabels} from '../apis/todos';
import TodoItemContainer from '../Containers/TodoItemContainer';

class TodoGroup extends Component {
    componentDidMount() {
        getLabels().then(response => {
            this.props.getLabels(response.data);
        });
        getTodoList().then(response => {
            this.props.getTodoList(response.data);
        });
    }

    render() {
        const todoItem = this.props.todoList.map((todo)=>(
            <TodoItemContainer key={todo.id} todo={todo}/>
        ));
        return (
            <React.Fragment>
                <div>
                    {todoItem}
                </div>
            </React.Fragment>
        );
    }
}

export default TodoGroup;