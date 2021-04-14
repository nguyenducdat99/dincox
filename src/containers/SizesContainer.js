// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import * as Types from '../constants/ActionTypes';
import PropTypes from 'prop-types';
import Sizes from '../components/admin/sizes/Sizes';
import TaskForm from '../components/admin/sizes/taskform/TaskForm';
import TaskList from '../components/admin/sizes/tasklist/TaskList';
import TaskItem from '../components/admin/sizes/tasklist/TaskItem';
import TaskControl from '../components/admin/sizes/taskcontrol/TaskControl';
import { useEffect, useState } from 'react';

// code function here
function SizesContainer(props){
    // get props
    const {
        onCloseForm,
        onFetchApi,
        onSaveItem,
        onDeleteItem,
        onSelectItemEdit,
        onOpenForm,
        onUpdateStatus,
        isDisplayForm,
        itemEdit,
        onToggleForm,
        onClearItemEdit,
        items
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
    // declare state,variable
    const taskForm = () =>{
        return (
            <TaskForm 
                itemEditRec={itemEdit}
                onClearItemEditRec={onClearItemEdit}
                onCloseFormRec={onCloseForm}
                onSaveItemRec={onSaveItem}
            />
        )
    };// use for categories

    // filter items with keyword
    var itemsFilter = items.filter(
        element => {
            return element.size_name.toLowerCase().includes(keyword.toLowerCase());
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
    const listIndex = itemsFilter.map((item, index) => {
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
    const taskList = () => {
        return (
            <TaskList
                listItem={listIndex}
            />
        )
    }

     // return ui task control
     const taskControlUI = () => {
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
            case Types.PRICE_UP:
                setSortType(Types.PRICE_UP);
                break;
            case Types.PRICE_DOWN:
                setSortType(Types.PRICE_DOWN);
                break;
            case Types.SALE_TRUE:
                setSortType(Types.SALE_TRUE);
                break;
            case Types.SALE_FALSE:
                setSortType(Types.SALE_FALSE);
                break;
            case Types.CATEGORY_GROUP:
                setSortType(Types.CATEGORY_GROUP);
                break;
            default:
                
                break;
        }
    }

    // return ui
    return(
        <Sizes
            isDisplayFormRec={isDisplayForm}
            onSelectItemEditRec={onSelectItemEdit}
            itemEditRec={itemEdit}
            onToggleFormRec={onToggleForm}
            taskFormRec={taskForm}
            taskListRec={taskList}
            onClearItemEditRec={onClearItemEdit}
            taskControlUI={taskControlUI}
        />
    );
}

SizesContainer.propTypes = {
    items: PropTypes.array,
    onClearItemEdit: PropTypes.func,
    onToggleForm: PropTypes.func,
    itemEdit: PropTypes.object,
    isDisplayForm: PropTypes.bool,
    onUpdateStatus: PropTypes.func,
    onOpenForm: PropTypes.func,
    onSelectItemEdit: PropTypes.func,
    onDeleteItem: PropTypes.func,
    onSaveItem: PropTypes.func,
    onFetchApi: PropTypes.func,
    onCloseForm: PropTypes.func
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

// custom sort 
const sortNameUp = (a,b) => {
    if (a.size_name > b.size_name) return 1;
    if (a.size_name < b.size_name) return -1;
    return 0;
}
const sortNameDown = (a,b) => {
    if (a.size_name > b.size_name) return -1;
    if (a.size_name < b.size_name) return 1;
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

export default connect(mapStateToProps,mapDispatchToProps)(SizesContainer)