import React, { Component } from 'react';
import './TodoItem.css';
import { updateTodo, deleteTodo } from '../apis/todos';
import { Row, Col, Button, Tag } from 'antd';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
    }

    onChange = (event) => {
        this.setState(
            {
                content: event.target.value
            });
    }

    onClickToAddLabel = () => {
        const todo = this.props.todo;
        const labels = this.props.labels;
        if (labels.filter(label => label.content === this.state.content).length !== 0) {
            if(labels.filter(label => label.content === this.state.content)[0].content === this.state.content){
                updateTodo(todo.id, { ...todo, labelId: todo.labelId.concat(labels.filter(label => label.content === this.state.content)[0].id) }).then(response => {
                    this.props.update(response.data);
                })
            }
        }
    }

    onClickLabel = (event) => {
        const todo = this.props.todo;
        updateTodo(todo.id, { ...todo, labels: todo.labels.filter(label => label !== event.target.innerText) }).then(response => {
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
        const content = this.state.content;

        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Row className='border width1000'>
                            <Col className={this.props.todo.done ? 'cross flex' : 'flex'} onClick={this.onClickToUpdate}>
                                {this.props.todo.text}
                            </Col>
                            <Col className='alignRight flex'>
                                {this.props.todo.labelId.map((labelId) => {
                                    const label = this.props.labels.filter(label=>label.id===labelId)[0]
                                    return <Tag key={label.id} color={label.color}>{label.content}</Tag>
                                })}
                            </Col>
                            <Col flex="20px" onClick={this.onClickToDelete}>x</Col>
                        </Row>
                    </Col>
                    <input className='border' type="text" value={content} onChange={this.onChange} />
                    <Button type="primary" onClick={this.onClickToAddLabel}>add label</Button>
                </Row>
            </React.Fragment>
        );
    }
}

export default TodoItem;