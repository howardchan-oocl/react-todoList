import React, { Component } from 'react';
import { Button } from 'antd';
import { addLabel, getLabels, deleteLabel } from '../apis/todos';
import { Select, List, Divider } from 'antd';

class ManageLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            color: 'blue'
        };
    }

    componentDidMount() {
        getLabels().then(response => {
            this.props.getLabels(response.data);
        });
    }

    onChange = (event) => {
        this.setState(
            {
                content: event.target.value
            });
    }

    onClickToAddLabel = () => {
        const labels = this.props.labels;
        if (labels.filter(label => label.content === this.state.content).length === 0) {
            addLabel(this.state.content, this.state.color).then(response => {
                this.props.addLabel(response.data);
            })
        }
    }

    onClickToDeleteLabel = (event) => {
        const labels = this.props.labels;
        deleteLabel(labels.filter(label=>label.content===event.target.innerText)[0].id).then(response => {
            this.props.deleteLabel(response.data);
        })
    }

    handleChange = (color) => {
        this.setState({
            color: color
        })
    }

    render() {
        const content = this.state.content;
        const { Option } = Select;

        return (
            <div>
                <List
                    size="large"
                    header={<div>Labels</div>}
                    bordered
                    dataSource={this.props.labels}
                    renderItem={item => <List.Item key={item.id} onClick={this.onClickToDeleteLabel} style={{background:item.color}}>{item.content}</List.Item>}
                />
                <Divider orientation="left"></Divider>
                <input className='border' type="text" value={content} onChange={this.onChange} />
                <Select defaultValue="blue" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="blue">blue</Option>
                    <Option value="orange">orange</Option>
                    <Option value="yellow">yellow</Option>
                    <Option value="red">red</Option>
                    <Option value="purple">purple</Option>
                    <Option value="green">green</Option>
                </Select>
                <Button type="primary" onClick={this.onClickToAddLabel}>add label</Button>
            </div>
        );
    }
}

export default ManageLabel;