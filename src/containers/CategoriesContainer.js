// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Categories from '../components/admin/categories/Categories';
import TaskForm from '../components/admin/categories/taskform/TaskForm';

// code function here
function CategoriesContainer(props){
    // declare state,variable
    var taskForm = () =>{
        return (
            <TaskForm 
                itemEditRec={props.itemEdit}
                onClearItemEditRec={props.onClearItemEdit}
                onCloseFormRec={props.onCloseForm}
            />
        )
    };

    return(
        <Categories
            isDisplayFormRec={props.isDisplayForm}
            onCloseFormRec={props.onCloseForm}
            onSelectItemEditRec={props.onSelectItemEdit}
            itemEditRec={props.itemEdit}
            onToggleFormRec={props.onToggleForm}
            taskFormRec={taskForm}
        />
    );
}

const mapStateToProps = state => {
    return {
        task: state.listCategory,
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.accountEdit
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi : () => {
            dispatch(Actions.fetchCategoriesRequest());
        },
        onToggleForm: () => {
            dispatch(Actions.toggleForm());
        },
        onCloseForm: () => {
            dispatch(Actions.closeForm())
        },
        onSelectItemEdit: item => {
            dispatch(Actions.selectAccount(item));
        },        onSaveItem: item => {
            dispatch(Actions.saveAccountRequest(item));
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectAccount(item));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesContainer)