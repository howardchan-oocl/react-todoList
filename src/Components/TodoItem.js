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
        const todo = this.props.todo;
        if (todo.tags.filter(tag => tag === this.state.tag).length===0) {
            updateTodo(todo.id, { ...todo, tags: todo.tags.concat(this.state.tag) }).then(response => {
                this.props.update(response.data);
            })
        }
    }

    onClickTag = (event) => {
        const todo = this.props.todo;
        updateTodo(todo.id, { ...todo, tags: todo.tags.filter(tag => tag !== event.target.innerText) }).then(response => {
            this.props.update(response.data);
        })
    }

    onClickToUpdate = () => {
        const todo = this.props.todo;
        updateTodo(todo.id, { ...todo, done: !todo.done }).then(response => {
            this.props.update(response.data);
        })
    }

    onClickToDelete = () => {
        const todo = this.props.todo;
        deleteTodo(todo.id).then(response => {
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
                        <Col className='alignRight flex'>
                            {this.props.todo.tags.map((tag) => {
                                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                                return <Tag key={tag} color={"#"+randomColor} closable onClick={this.onClickTag}>{tag}</Tag>
                             })}
                        </Col>
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