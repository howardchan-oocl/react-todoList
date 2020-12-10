import React, { Component } from 'react';
import DoneItemContainer from '../Containers/DoneItemContainer';

class DoneList extends Component {
    render() {
        const DoneItemList = this.props.doneList.filter(todo=>todo.done).map(done=><DoneItemContainer done={done} />);

        return (
            <div>
                <h1>DoneList</h1>
                {DoneItemList}
            </div>
        );
    }
}

export default DoneList;