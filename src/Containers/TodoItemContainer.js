import { connect } from 'react-redux';
import { deleteItem, update } from '../actions';
import TodoItem from '../Components/TodoItem';

const mapDispatchToProps = dispatch => ({
        deleteItem: (todo) => {
            dispatch(deleteItem(todo));
        },
        update: (todo) => {
            dispatch(update(todo));
        }
})

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;