// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import * as Types from '../constants/ActionTypes';
import Account from '../components/admin/accounts/Account';
import PropTypes from 'prop-types';
import TaskForm from '../components/admin/accounts/taskform/TaskForm';
import TaskList from '../components/admin/accounts/tasklist/TaskList';
import TaskControl from '../components/admin/accounts/taskcontrol/TaskControl';
import TaskItem from '../components/admin/accounts/tasklist/TaskItem';
import { useEffect,useState } from 'react';

// code function here
function AccountContainer(props){
    // get props
    const { 
        onCloseForm,
        onSelectItemEdit,
        itemEdit,
        onToggleForm,
        isDisplayForm,
        onClearItemEdit,
        onSaveItem,
        items,
        onFetchAccounts,
        onOpenForm,
        onDeleteItem,
        onUpdateStatus
    } = props;

    // declare state component
     const [keyword, setKeyword] = useState('');
     const [sortType, setSortType] = useState('');


    // load data
    useEffect(
        () => {
            onFetchAccounts();
            //eslint-disable-next-line
        },[]
    )

    // return ui task form 
    const taskFormUI = () => {
        return (
            <TaskForm 
                itemEdit={itemEdit}
                onSaveItem={onSaveItem}
                onClearItemEdit={onClearItemEdit}
                onCloseForm={onCloseForm}
            />
        )
    }

    // filter items with keyword
    var itemsFilter = items.filter(
        element => {
            return element.user_name.toLowerCase().includes(keyword.toLowerCase())||
            element.email.toLowerCase().includes(keyword.toLowerCase());
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

    // return ui task list
    const taskListUI = () => {
        return (
            <TaskList
                listIndex={listIndex}
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
            default:
                
                break;
        }
    }

    // return login ui
    return(
        <Account 
            onCloseForm={onCloseForm}
            onSelectItemEdit={onClearItemEdit}
            itemEdit={itemEdit}
            onToggleFormRec={onToggleForm}
            isDisplayForm={isDisplayForm}
            taskFormUI={taskFormUI}
            taskListUI={taskListUI}
            taskControlUI={taskControlUI}
        />
    );
}

AccountContainer.propTypes = {
    onCloseForm: PropTypes.func,
    onSelectItemEdit: PropTypes.func,
    itemEdit: PropTypes.object,
    onToggleFormRec: PropTypes.func,
    isDisplayForm: PropTypes.bool,
    onClearItemEdit: PropTypes.func,
    onSaveItem: PropTypes.func,
    items: PropTypes.array,
    onFetchAccounts: PropTypes.func,
    onUpdateStatus: PropTypes.func,
    onDeleteItem: PropTypes.func,
    onOpenForm: PropTypes.func
}



const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.accountEdit,
        items: state.ListAccount
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchAccounts : items => {
            dispatch(Actions.fetchAccountRequest());
        },
        onToggleForm: () => {
            dispatch(Actions.toggleForm());
        },
        onCloseForm: () => {
            dispatch(Actions.closeForm())
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectAccount(item));
        },
        onSelectItemEdit: item => {
            dispatch(Actions.selectAccountRequest(item));
        },        
        onSaveItem: item => {
            dispatch(Actions.saveAccountRequest(item));
        },
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusAccountRequest(item));
        },
        onDeleteItem: id_account => {
            dispatch(Actions.deleteAccountRequest(id_account));
        },
        onOpenForm: () => {
            dispatch(Actions.openForm());
        },
    }
}

// custom sort 
const sortNameUp = (a,b) => {
    if (a.user_name > b.user_name) return 1;
    if (a.user_name < b.user_name) return -1;
    return 0;
}
const sortNameDown = (a,b) => {
    if (a.user_name > b.user_name) return -1;
    if (a.user_name < b.user_name) return 1;
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


export default connect(mapStateToProps,mapDispatchToProps)(AccountContainer)