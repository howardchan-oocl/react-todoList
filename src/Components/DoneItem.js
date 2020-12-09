import React, { Component } from 'react';
import './TodoItem.css';
import { Row, Col } from 'antd';

class DoneItem extends Component {
    render() {
        return (
            <Row style={{ borderStyle: 'solid', width: '300px' }}>
                <Col>{this.props.done.text}</Col>
            </Row>
        );
    }
}

export default DoneItem;