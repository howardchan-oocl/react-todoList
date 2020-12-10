import { connect } from 'react-redux';
import DoneItem from '../Components/DoneItem';

const mapStateToProps = (state) => ({
    labels: state.labels
})

const DoneItemContainer = connect(mapStateToProps)(DoneItem);

export default DoneItemContainer;