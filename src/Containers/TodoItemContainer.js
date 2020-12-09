import { connect } from 'react-redux';
import { deleteItem, updateStatus, updateTag } from '../actions';
import TodoItem from '../Components/TodoItem';

const mapDispatchToProps = dispatch => ({
        deleteItem: (todo) => {
            dispatch(deleteItem(todo));
        },
        updateStatus: (todo) => {
            dispatch(updateStatus(todo));
        },
        updateTag: (todo) => {
            dispatch(updateTag(todo));
        }
})

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;