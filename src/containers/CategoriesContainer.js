// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Categories from '../components/admin/categories/Categories';
import TaskForm from '../components/admin/categories/taskform/TaskForm';
import TaskList from '../components/admin/categories/tasklist/TaskList';
import TaskItem from '../components/admin/categories/tasklist/TaskItem';
import { useEffect } from 'react';

// code function here
function CategoriesContainer(props){

    // load data
    useEffect( 
        () => {
            props.onFetchApi();
            // eslint-disable-next-line
        },[]
    )

    // declare state,variable
    var taskForm = () =>{
        return (
            <TaskForm 
                itemEditRec={props.itemEdit}
                onClearItemEditRec={props.onClearItemEdit}
                onCloseFormRec={props.onCloseForm}
            />
        )
    };// use for categories

    var listIndex = props.items.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                task={item}
            />
        )
    });// use for taskList
    var taskList = () => {
        return (
            <TaskList
                listItem={listIndex}
            />
        )
    }// use for categories

    return(
        <Categories
            isDisplayFormRec={props.isDisplayForm}
            onCloseFormRec={props.onCloseForm}
            onSelectItemEditRec={props.onSelectItemEdit}
            itemEditRec={props.itemEdit}
            onToggleFormRec={props.onToggleForm}
            taskFormRec={taskForm}
            taskListRec={taskList}
        />
    );
}

const mapStateToProps = state => {
    return {
        items: state.listCategory,
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