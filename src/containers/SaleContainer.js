// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';

import { useEffect } from 'react';
import Sales from '../components/admin/sales/Sales';
import TaskForm from '../components/admin/sales/taskform/TaskForm';
import TaskItem from '../components/admin/sales/tasklist/TaskItem';
import TaskList from '../components/admin/sales/tasklist/TaskList'

// code function here
function SaleContainer(props){

    // load data
    useEffect( 
        () => {
            props.onFetchApi();
            props.onCloseForm();
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
                onSaveItemRec={props.onSaveItem}
            />
        )
    };// use for categories

    var listIndex = props.items.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                itemRec={item}
                onDeleteItemRec={props.onDeleteItem}
                onCloseFormRec={props.onCloseForm}
                onSelectItemEditRec={props.onSelectItemEdit}
                onOpenFormRec={props.onOpenForm}
                onUpdateStatusRec={props.onUpdateStatus}
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
        <Sales
            isDisplayFormRec={props.isDisplayForm}
            onSelectItemEditRec={props.onSelectItemEdit}
            itemEditRec={props.itemEdit}
            onToggleFormRec={props.onToggleForm}
            taskFormRec={taskForm}
            taskListRec={taskList}
            onClearItemEditRec={props.onClearItemEdit}
            
        />
    );
}

const mapStateToProps = state => {
    return {
        items: state.listSize,
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.sizeEdit
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi : () => {
            dispatch(Actions.fetchSizesRequest());
        },
        onToggleForm: () => {
            dispatch(Actions.toggleForm());
        },
        onOpenForm: () => {
            dispatch(Actions.openForm());
        },
        onCloseForm: () => {
            dispatch(Actions.closeForm())
        },
        onSelectItemEdit: id => {
            dispatch(Actions.selectSizeRequest(id));
        },
        onSaveItem: item => {
            dispatch(Actions.saveSizeRequest(item));
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectSize(item));
        },
        onDeleteItem: id => {
            dispatch(Actions.deleteSizeRequest(id));
        },
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusSizeRequest(item));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(SaleContainer)