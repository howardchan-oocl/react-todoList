import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

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
        this.props.addItem(
            {
                id: uuidv4(),
                text:this.state.text,
                done: false
            }
        );
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