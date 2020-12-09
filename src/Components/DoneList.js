import React, { Component } from 'react';
import DoneItem from './DoneItem';

class DoneList extends Component {
    render() {
        const DoneItemList = this.props.doneList.filter(todo=>todo.done).map(done=><DoneItem done={done} />);

        return (
            <div>
                DoneList
                {DoneItemList}
            </div>
        );
    }
}

export default DoneList;