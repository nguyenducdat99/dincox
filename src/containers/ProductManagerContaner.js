// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Product from '../components/admin/products/Product';
import TaskForm from '../components/admin/products/taskform/TaskForm';
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
            // props.onOpenForm();
            // eslint-disable-next-line
        },[]
    )

    // get props
    const { items,categories } = props;

    // return option category ui
    var optionCategoryUI = categories.map((element,index) => {
        return <option key={index} value={element.id_category}>{element.category_name}</option>
    })

   

    // return task form ui
    var taskForm = () =>{
        return (
            <TaskForm 
                itemEditRec={props.itemEdit}
                onClearItemEditRec={props.onClearItemEdit}
                onCloseFormRec={props.onCloseForm}
                onSaveItemRec={props.onSaveItem}
                optionCategoryUIRec={optionCategoryUI}
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
                onUpdateSaleRec={props.onUpdateSale}
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
        <Product
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
        itemEdit: state.productEdit
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
            dispatch(Actions.selectProductRequest(id));
        },
        onSaveItem: item => {
            dispatch(Actions.saveProductRequest(item));
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectProduct(item));
        },
        onDeleteItem: id => {
            dispatch(Actions.deleteCategoryRequest(id));
        },
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusProductRequest(item));
        },
        onUpdateSale: item => {
            dispatch(Actions.updateSaleProductRequest(item));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesContainer)