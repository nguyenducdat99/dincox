// import style library, components
import './Categories.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { useState } from 'react';
import TaskControl from './taskcontrol/TaskControl';
import TaskList from './tasklist/TaskList';
import TaskForm from './taskform/TaskForm';
import { connect } from 'react-redux';
import * as Actions from '../../../actions/Actions';

// function code here
function Categories(props) {
    // declare state component
    const [tasks, setTasks] = useState([]);
    const [itemEdit, setItemEdit] = useState(null);
    const [keyWord, setKeyWord] = useState('');
    const [sortType, setSortType] = useState('0');
    var { isDisplayForm } = props

    // toggle form add/edit
    var onToggleForm = () => {
        props.onToggleForm();
    };

    // exit form add/edit
    var onExitForm = () => {

    }

    // handle slect item 
    var onSelectItem = item => {
        setItemEdit(item);
    }

    var findIndex = (id) => {
        var result = -1;
        tasks.forEach((task, index) => {
            if(task.category_name === id){
                result = index;
            }
        });
        return result;
    }

    // handle update status
    var onUpdateStatus = item => {
        var newTask = [...tasks];

        let index = findIndex(item.category_name);

        newTask[index].status = !newTask[index].status;
        setTasks(newTask);
        localStorage.setItem('tasksCategories', JSON.stringify(newTask));
    }

    // handle delete 
    var onDeleteTask = item => {
        var index = findIndex(item.category_name);
        let newTask = [...tasks];

        newTask.splice(index, 1);
        setTasks(newTask);
        localStorage.setItem('tasksCategories', JSON.stringify(newTask));
        onExitForm();
    }

    // handle search
    var onSearch = text => {
        setKeyWord(text);
    }

    // handle sort
    var onSort = type => {
        setSortType(type);
    }
    
    var tasksCopy = [...tasks];
    tasksCopy = tasksCopy.filter((task) => {
        return task.category_name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
    });
    switch (sortType) {
        case '0':
            tasksCopy.sort(
                (a,b) => {
                    if (a.category_name>b.category_name) return 1;
                    if (a.category_name<b.category_name) return -1;
                    return 0;
                }
            )
            break;
        case '1':
            tasksCopy.sort(
                (a,b) => {
                    if (a.category_name>b.category_name) return -1;
                    if (a.category_name<b.category_name) return 1;
                    return 0;
                }
            )
            break;
        case '2':
            tasksCopy = tasksCopy.filter((task) => {
                return task.status === true;
            });
            break;
        case '3':
            tasksCopy = tasksCopy.filter((task) => {
                return task.status === false;
            });
            break;
        default:
            tasksCopy.sort(
                (a,b) => {
                    if (a.category_name>b.category_name) return 1;
                    if (a.category_name<b.category_name) return -1;
                    return 0;
                }
            )
            break;
    }

    return (
        <>
            <SmallBanner title="Quản lý"/>
            <div className='categories'>
                <div className="wrapper">
                    <div className="categories__title">
                        <h1>Quản lý thể loại</h1>
                    </div>
                    <div className="categories__manager">
                        <div className={isDisplayForm?"categories__manager__grid":"categories__manager__grid--hidden"}>
                            <div className={isDisplayForm?"categories__manager__add-update":"categories__manager__add-update--hidden"}>
                                {
                                    <TaskForm 
                                        onExitForm={onExitForm}
                                        itemEdit={itemEdit}

                                    />
                                }
                            </div>
                            <div className="categories__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Thể Loại
                                </button>
                                <TaskControl 
                                    onSearch={onSearch}
                                    onSort={onSort}
                                />
                                <TaskList 
                                    onSelectItem={onSelectItem}
                                    onUpdateStatus={onUpdateStatus}
                                    onDeleteTask={onDeleteTask}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    }
};
const mapDispatchToProps = (dispatch, action) => {
    return {
        onToggleForm: () => {
            dispatch(Actions.toggleForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);