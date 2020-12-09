import { connect } from 'react-redux';
import { getTodoList } from '../actions';
import TodoGroup from '../Components/TodoGroup';

const mapStateToProps = (state) => ({
    todoList: state
})

const mapDispatchToProps = (dispatch) => ({
    getTodoList: (todos) => {
        dispatch(getTodoList(todos));
    }
})

const TodoGroupContainer = connect(mapStateToProps,mapDispatchToProps)(TodoGroup);

export default TodoGroupContainer;