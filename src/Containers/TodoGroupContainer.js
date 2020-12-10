import { connect } from 'react-redux';
import { getTodoList, getLabels } from '../actions';
import TodoGroup from '../Components/TodoGroup';

const mapStateToProps = (state) => ({
    todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
    getTodoList: (todos) => {
        dispatch(getTodoList(todos));
    },
    getLabels: (labels) => {
        dispatch(getLabels(labels));
    },
})

const TodoGroupContainer = connect(mapStateToProps,mapDispatchToProps)(TodoGroup);

export default TodoGroupContainer;