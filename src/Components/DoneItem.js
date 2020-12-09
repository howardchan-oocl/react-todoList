import React, { Component } from 'react';
import './TodoItem.css';

class DoneItem extends Component {
    render() {
        return (
            <div>
                <button>{this.props.done.text}</button>
            </div>
        );
    }
}

export default DoneItem;