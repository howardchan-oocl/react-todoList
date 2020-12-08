import React, { Component } from 'react';

class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    onChange = (event) => {
        this.setState((
            {
                text: event.target.value
            }));
    }

    onClick = (event) => {
        
    }

    render() {
        return (
            <div>
                <input type="text" value={''} onChange={this.onChange} />
                <button onClick={this.onClick} />
            </div>
        );
    }
}

export default TodoGenerator;