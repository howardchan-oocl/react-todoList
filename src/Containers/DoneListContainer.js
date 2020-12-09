import { connect } from 'react-redux';
import DoneList from '../Components/DoneList';

const mapStateToProps = (state) => ({
    doneList: state
})

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;