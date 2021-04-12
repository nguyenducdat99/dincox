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
        items,
        onFilter
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
                itemEditRec={props.itemEdit}
                onClearItemEditRec={props.onClearItemEdit}
                onCloseFormRec={onCloseForm}
                onSaveItemRec={props.onSaveItem}
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
                onDeleteItemRec={props.onDeleteItem}
                onCloseFormRec={onCloseForm}
                onSelectItemEditRec={props.onSelectItemEdit}
                onOpenFormRec={props.onOpenForm}
                onUpdateStatusRec={props.onUpdateStatus}
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
            isDisplayFormRec={props.isDisplayForm}
            onSelectItemEditRec={props.onSelectItemEdit}
            itemEditRec={props.itemEdit}
            onToggleFormRec={props.onToggleForm}
            taskFormRec={taskForm}
            taskListRec={taskList}
            onClearItemEditRec={props.onClearItemEdit}
            onFilter={onFilter}
            taskControl={taskControl}
        />
    );
}

SaleContainer.propTypes = {
    onFetchApi: PropTypes.func,
    onCloseForm: PropTypes.func,
    items: PropTypes.array,
    onFilter: PropTypes.func
}

const mapStateToProps = state => {
    return {
        items: state.sales,
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.sizeEdit
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



export default connect(mapStateToProps,mapDispatchToProps)(SaleContainer)