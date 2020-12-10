import { connect } from 'react-redux';
import { addLabel, getLabels, deleteLabel} from '../actions';
import ManageLabel from '../Components/ManageLabel';

const mapStateToProps = (state) => ({
    labels: state.labels
})

const mapDispatchToProps = dispatch => ({
    addLabel: (label) => {
        dispatch(addLabel(label));
    },
    getLabels: (labels) => {
        dispatch(getLabels(labels));
    },
    deleteLabel: (label) => {
        dispatch(deleteLabel(label));
    }
})

const ManageLabelContainer = connect(mapStateToProps, mapDispatchToProps)(ManageLabel);

export default ManageLabelContainer;