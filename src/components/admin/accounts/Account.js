// import style library, components
import './Account.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import {  useState } from 'react';
import TaskControl from './taskcontrol/TaskControl';
import TaskList from './tasklist/TaskList';
import TaskForm from './taskform/TaskForm';
import { connect } from 'react-redux';
import * as Actions from '../../../actions/Actions';

// function code here
function Account(props) {
    // declare state component
    const [itemEdit, setItemEdit] = useState(null);
    // const [keyWord, setKeyWord] = useState('');
    // const [sortType, setSortType] = useState('0');
    var { isDisplayForm } = props;

    // toggle form add/edit
    var onToggleForm = () => {
        props.onToggleForm();
    };

    // handle slect item 
    var onSelectItem = item => {
        setItemEdit(item);
        // setIsDisplayForm(true);
    }

    // handle search
    var onSearch = text => {
        // setKeyWord(text);
    }

    // handle sort
    var onSort = type => {
        // setSortType(type);
    }

    // var tasksCopy = [...tasks];
    // tasksCopy = tasksCopy.filter((task) => {
    //     return task.user_name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
    // });
    // switch (sortType) {
    //     case '0':
    //         tasksCopy.sort(
    //             (a,b) => {
    //                 if (a.user_name>b.user_name) return 1;
    //                 if (a.user_name<b.user_name) return -1;
    //                 return 0;
    //             }
    //         )
    //         break;
    //     case '1':
    //         tasksCopy.sort(
    //             (a,b) => {
    //                 if (a.user_name>b.user_name) return -1;
    //                 if (a.user_name<b.user_name) return 1;
    //                 return 0;
    //             }
    //         )
    //         break;
    //     case '2':
    //         tasksCopy = tasksCopy.filter((task) => {
    //             return task.status === true;
    //         });
    //         break;
    //     case '3':
    //         tasksCopy = tasksCopy.filter((task) => {
    //             return task.status === false;
    //         });
    //         break;
    //     default:
    //         tasksCopy.sort(
    //             (a,b) => {
    //                 if (a.user_name>b.user_name) return 1;
    //                 if (a.user_name<b.user_name) return -1;
    //                 return 0;
    //             }
    //         )
    //         break;
    // }

    return (
        <>
            <SmallBanner title="Quản lý"/>
            <div className='account'>
                <div className="wrapper">
                    <div className="account__title">
                        <h1>Quản lý Tài Khoản</h1>
                    </div>
                    <div className="account__manager">
                        <div className={isDisplayForm?"account__manager__grid":"account__manager__grid--hidden"}>
                            <div className={isDisplayForm?"account__manager__add-update":"account__manager__add-update--hidden"}>
                                {
                                    <TaskForm 
                                        itemEdit={itemEdit}

                                    />
                                }
                            </div>
                            <div className="account__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Tài Khoản
                                </button>
                                <TaskControl 
                                    onSearch={onSearch}
                                    onSort={onSort}
                                />
                                <TaskList   
                                    onSelectItem={onSelectItem}
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
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(Actions.toggleForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);