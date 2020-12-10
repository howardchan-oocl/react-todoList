import React, { Component } from 'react';
import './TodoItem.css';
import { updateTodo, deleteTodo } from '../apis/todos';
import { Row, Col, Button, Tag } from 'antd';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
        };
    }

    onChange = (event) => {
        this.setState(
            {
                tag: event.target.value
            });
    }

    onClickToUpdateTag = () => {
        updateTodo(this.props.todo.id, { ...this.props.todo, tags: this.props.todo.tags.concat(this.state.tag) }).then(response => {
            this.props.updateTag(response.data);
        })
    }

    onClickTag = (event) => {
        updateTodo(this.props.todo.id, { ...this.props.todo, tags: this.props.todo.tags.filter(tag=>tag!==event.target.innerText) }).then(response => {
            this.props.updateTag(response.data);
        })
    }

    onClickToUpdate = () => {
        updateTodo(this.props.todo.id, { ...this.props.todo, done: !this.props.todo.done }).then(response => {
            this.props.updateStatus(response.data);
        })
    }

    onClickToDelete = () => {
        deleteTodo(this.props.todo.id).then(response => {
            this.props.deleteItem(response.data);
        })
    }

    render() {
        const tag = this.state.tag;

        return (
            <Row>
                <Col>
                    <Row className='border width1000'>
                    <Col className={this.props.todo.done ? 'cross flex' : 'flex'} onClick={this.onClickToUpdate}>
                        {this.props.todo.text}
                    </Col>
                    <Col className='alignRight flex'>{this.props.todo.tags.map((tag)=><Tag key={tag} onClick={this.onClickTag}>{tag}</Tag>)}</Col>
                    <Col flex="20px" onClick={this.onClickToDelete}>x</Col>
                    </Row>
                </Col>
                <input className='border' type="text" value={tag} onChange={this.onChange} />
                <Button type="primary" onClick={this.onClickToUpdateTag}>add tag</Button>
            </Row>
        );
    }
}

export default TodoItem;