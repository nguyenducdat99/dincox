// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import * as Types from '../constants/ActionTypes';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Sales from '../components/admin/sales/Sales';
import TaskForm from '../components/admin/sales/taskform/TaskForm';
import TaskItem from '../components/admin/sales/tasklist/TaskItem';
import TaskList from '../components/admin/sales/tasklist/TaskList'
import TaskControl from '../components/admin/sales/taskcontrol/TaskControl';
import { useState } from 'react';


// code function here
function SaleContainer(props){
    // get props
    const {
        onFetchApi,
        onCloseForm,
        onOpenForm,
        items,
        onFilter,
        itemEdit,
        onClearItemEdit,
        onSaveItem,
        onSelectItemEdit,
        isDisplayForm,
        onToggleForm,
        onUpdateStatus,
        onDeleteItem
    } = props;

    // declare state
    const [keyword, setKeyword] = useState('');
    const [sortType, setSortType] = useState('');

    // load data
    useEffect( 
        () => {
            onFetchApi();
            onCloseForm();
            // eslint-disable-next-line
        },[]
    )


    // return taskForm ui
    var taskForm = () =>{
        return (
            <TaskForm 
                itemEditRec={itemEdit}
                onClearItemEditRec={onClearItemEdit}
                onCloseFormRec={onCloseForm}
                onSaveItemRec={onSaveItem}
                items={items}
            />
        )
    };// use for categories

    // filter items with keyword
    var itemsFilter = items.filter(
        element => {
            return element.sale_name.includes(keyword);
        } 
    )
    switch (sortType) {
        case Types.NAME_UP:
            itemsFilter.sort(sortNameUp);
            break;
        case Types.NAME_DOWN:
            itemsFilter.sort(sortNameDown);
            break;
        case Types.STATUS_TRUE:
            itemsFilter.sort(sortStatusTrue);
            break;
        case Types.STATUS_FALSE:
            itemsFilter.sort(sortStatusFalse);
            break;
        default:
            
            break;
    }
    // return ui from data
    var listIndex = itemsFilter.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                itemRec={item}
                onDeleteItemRec={onDeleteItem}
                onCloseFormRec={onCloseForm}
                onSelectItemEditRec={onSelectItemEdit}
                onOpenFormRec={onOpenForm}
                onUpdateStatusRec={onUpdateStatus}
            />
        )
    });// use for taskList
    
    // return tasklist ui
    const taskList = () => {
        return (
            <TaskList
                listItem={listIndex}
            />
        )
    }// use for categories


    // return task control ui
    const taskControl = () => {
        return (
            <TaskControl 
                onSearch={onSearch}
                onSort={onSort}
            />
        )
    }

    // handle when input keyword
    const onSearch = keyword => {
        setKeyword(keyword);
    }

    // handle when sort
    const onSort = type => {
        switch (type) {
            case Types.NAME_UP:
                setSortType(Types.NAME_UP);
                break;
            case Types.NAME_DOWN:
                setSortType(Types.NAME_DOWN);
                break;
            case Types.STATUS_TRUE:
                setSortType(Types.STATUS_TRUE);
                break;
            case Types.STATUS_FALSE:
                setSortType(Types.STATUS_FALSE);
                break;
            default:
                
                break;
        }
    }

    return(
        <Sales
            isDisplayFormRec={isDisplayForm}
            onSelectItemEditRec={onSelectItemEdit}
            itemEditRec={itemEdit}
            onToggleFormRec={onToggleForm}
            taskFormRec={taskForm}
            taskListRec={taskList}
            onClearItemEditRec={onClearItemEdit}
            onFilter={onFilter}
            taskControl={taskControl}
        />
    );
}

SaleContainer.propTypes = {
    onFetchApi: PropTypes.func,
    onCloseForm: PropTypes.func,
    onOpenForm: PropTypes.func,
    items: PropTypes.array,
    onFilter: PropTypes.func,
    itemEdit: PropTypes.object,
    onClearItemEdit: PropTypes.func,
    onSaveItem: PropTypes.func,
    onSelectItemEdit: PropTypes.func,
    isDisplayForm: PropTypes.bool,
    onToggleForm: PropTypes.func,
    onUpdateStatus: PropTypes.func,
    onDeleteItem: PropTypes.func
}

const mapStateToProps = state => {
    return {
        items: state.sales,
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.saleEdit
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi : () => {
            dispatch(Actions.fetchSaleRequest());
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
            dispatch(Actions.selectSaleRequest(id));
        },
        onSaveItem: item => {
            dispatch(Actions.saveSaleRequest(item));
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectSale(item));
        },
        onDeleteItem: id => {
            dispatch(Actions.deleteSizeRequest(id));
        },
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusSaleRequest(item));
        }, 
    }
};

// custom sort 
const sortNameUp = (a,b) => {
    if (a.sale_name > b.sale_name) return 1;
    if (a.sale_name < b.sale_name) return -1;
    return 0;
}
const sortNameDown = (a,b) => {
    if (a.sale_name > b.sale_name) return -1;
    if (a.sale_name < b.sale_name) return 1;
    return 0;
}
const sortStatusFalse = (a,b) => {
    if (a.status > b.status) return 1;
    if (a.status < b.status) return -1;
    return 0;
}
const sortStatusTrue = (a,b) => {
    if (a.status > b.status) return -1;
    if (a.status < b.status) return 1;
    return 0;
}



export default connect(mapStateToProps, mapDispatchToProps)(SaleContainer)