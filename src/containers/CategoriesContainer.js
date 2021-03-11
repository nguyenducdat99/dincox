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
        itemEdit: state.categoryEdit
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
        onOpenForm: () => {
            dispatch(Actions.openForm());
        },
        onCloseForm: () => {
            dispatch(Actions.closeForm())
        },
        onSelectItemEdit: id => {
            dispatch(Actions.selectCategoryRequest(id));
        },
        onSaveItem: item => {
            dispatch(Actions.saveCategoryRequest(item));
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectAccount(item));
        },
        onDeleteItem: id => {
            dispatch(Actions.deleteCategoryRequest(id));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesContainer)