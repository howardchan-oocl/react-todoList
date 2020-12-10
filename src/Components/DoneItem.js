import React, { Component } from 'react';
import './TodoItem.css';
import { Row, Col, Tag } from 'antd';

class DoneItem extends Component {
    
    render() {
        return (
            <Row className='border width1000'>
            <Col className='flex' onClick={this.onClickToUpdate}>
                {this.props.done.text}
            </Col>
            <Col className='alignRight flex'>
                {this.props.done.labelId.map((labelId) => {
                    const label = this.props.labels.filter(label=>label.id===labelId)[0]
                    return <Tag color={label.color}>{label.content}</Tag>
                })}
            </Col>
        </Row>
        );
    }
}

export default DoneItem;