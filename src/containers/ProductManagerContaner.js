// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import ProductManger from '../components/admin/products/Product';
import TaskForm from '../components/admin/categories/taskform/TaskForm';
import TaskList from '../components/admin/products/tasklist/TaskList';
import TaskItem from '../components/admin/products/tasklist/TaskItem';
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

    // get props
    const { items,categories } = props;

    // return task form ui
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

    // return list item in cart
    var listIndex = items.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                itemRec={item}
                categoriesRec={categories}
                onDeleteItemRec={props.onDeleteItem}
                onCloseFormRec={props.onCloseForm}
                onSelectItemEditRec={props.onSelectItemEdit}
                onOpenFormRec={props.onOpenForm}
                onUpdateStatusRec={props.onUpdateStatus}
            />
        )
    });// use for taskList

    // return list item in cart
    var taskList = () => {
        return (
            <TaskList
                listItem={listIndex}
            />
        )
    }// use for categories

    return(
        <ProductManger
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
        items: state.ListProduct,
        categories: state.listCategory,
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
            dispatch(Actions.selectCategory(item));
        },
        onDeleteItem: id => {
            dispatch(Actions.deleteCategoryRequest(id));
        },
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusCategoryRequest(item));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesContainer)