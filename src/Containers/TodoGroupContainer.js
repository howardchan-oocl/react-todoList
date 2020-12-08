import { connect } from 'react-redux';
import TodoGroup from '../Components/TodoGroup';

const mapStateToProps = (state) => ({
    todoList: state
})

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup);

export default TodoGroupContainer;