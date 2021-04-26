// import style library, components
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../actions/Actions';
import * as Types from '../constants/ActionTypes';
import Articles from '../components/admin/articles/Articles';
import TaskForm from '../components/admin/articles/taskform/TaskForm';
import TaskList from '../components/admin/articles/tasklist/TaskList';
import TaskItem from '../components/admin/articles/tasklist/TaskItem';
import TaskControl from '../components/admin/articles/taskcontrol/TaskControl';
import { useEffect, useState } from 'react';

// code function here
function ArticlesContainer(props){
    // get props
    const {
        onFetchApi,
        onCloseForm,
        itemEdit,
        onClearItemEdit,
        onToggleForm,
        onSelectItemEdit,
        isDisplayForm,
        onUpdateStatus,
        onOpenForm,
        onDeleteItem,
        onSaveItem,
        items
    } = props;

    // declare state component
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
            return element.title.toLowerCase().includes(keyword.toLowerCase());
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
            default:
                
                break;
        }
    }


    return(
        <Articles
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

ArticlesContainer.propTypes = {
    onSaveItem: PropTypes.func,
    onDeleteItem: PropTypes.func,
    onOpenForm: PropTypes.func,
    onUpdateStatus: PropTypes.func,
    isDisplayForm: PropTypes.bool,
    onSelectItemEdit: PropTypes.func,
    onToggleForm: PropTypes.func,
    onClearItemEdit: PropTypes.func,
    itemEdit: PropTypes.object,
    onCloseForm: PropTypes.func,
    onFetchApi: PropTypes.func,
    items: PropTypes.array
}

const mapStateToProps = state => {
    return {
        items: state.listArticle,
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.ArticleEdit
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi : () => {
            dispatch(Actions.fetchArticleRequest());
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
            dispatch(Actions.selectArticleRequest(id));
        },
        onSaveItem: item => {
            dispatch(Actions.saveArticleRequest(item));
        },
        onClearItemEdit: item => {
            dispatch(Actions.selectArticle(item));
        },
        onDeleteItem: id => {
            dispatch(Actions.deleteCategoryRequest(id));
        },
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusCategoryRequest(item));
        }
    }
};

// custom sort 
const sortNameUp = (a,b) => {
    if (a.category_name > b.category_name) return 1;
    if (a.category_name < b.category_name) return -1;
    return 0;
}
const sortNameDown = (a,b) => {
    if (a.category_name > b.category_name) return -1;
    if (a.category_name < b.category_name) return 1;
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

export default connect(mapStateToProps,mapDispatchToProps)(ArticlesContainer)