import { connect } from 'react-redux';
import { deleteItem, updateStatus } from '../actions';
import TodoItem from '../Components/TodoItem';

const mapDispatchToProps = dispatch => ({
        deleteItem: (todo) => {
            dispatch(deleteItem(todo));
        },
        updateStatus: (todo) => {
            dispatch(updateStatus(todo));
        }
})

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;