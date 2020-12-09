import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import { postTodo } from '../apis/todos';

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
        postTodo(this.state.text).then(response=>{
            this.props.addItem(response.data);
        })
    }

    render() {
        const text = this.state.text;

        return (
            <div>
                <input type="text" value={text} onChange={this.onChange} />
                <button onClick={this.onClick}>Add</button>
            </div>
        );
    }
}

export default TodoGenerator;