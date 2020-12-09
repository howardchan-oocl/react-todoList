import React, { Component } from 'react';
import { postTodo } from '../apis/todos';
import { Button } from 'antd';

class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    onChange = (event) => {
        this.setState(
            {
                text: event.target.value
            });
    }

    onClick = () => {
        postTodo(this.state.text).then(response => {
            this.props.addItem(response.data);
        })
    }

    render() {
        const text = this.state.text;

        return (
            <div>
                <input type="text" value={text} onChange={this.onChange} />
                <Button type="primary" onClick={this.onClick}>add todo</Button>
            </div>
        );
    }
}

export default TodoGenerator;