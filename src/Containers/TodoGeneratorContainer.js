import { connect } from 'react-redux';
import { addItem } from '../actions';
import TodoGenerator from '../Components/TodoGenerator';

const mapDispatchToProps = dispatch => {
    return {
        addItem: (todo) => {
            dispatch(addItem(todo));
        }
    }
}

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;