// import style library, components
import './Account.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { useState } from 'react';
import TaskControl from './taskcontrol/TaskControl';
import TaskList from './tasklist/TaskList';
import TaskForm from './taskform/TaskForm';

// function code here
function Account() {
    // declare state component
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [task, setTask] = useState([
        {
            id_account: 9,
            user_name: 'admin 11',
            position: 1,
            email: 'admin11@gmail.com',
            status: 0
        }
    ]);
    
    // toggle form add/edit
    var onToggleForm = () => {
        setIsDisplayForm(!isDisplayForm);
    };

    // exit form add/edit
    var onExitForm = () => {
        setIsDisplayForm(!isDisplayForm);
    }

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
                                        onExitForm={onExitForm}
                                    />
                                }
                            </div>
                            <div className="account__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Công Việc
                                </button>
                                <TaskControl />
                                <TaskList 
                                    task={task}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account;