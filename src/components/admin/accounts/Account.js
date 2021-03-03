// import style library, components
import './Account.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { useState } from 'react';
import TaskControl from './taskcontrol/TaskControl';
import TaskList from './tasklist/TaskList'

// function code here
function Account() {
    const [isDisplayForm, setIsDisplayForm] = useState(false);
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
                                <p>Task form</p>
                            </div>
                            <div className="account__manager__other-action">
                                <button type="button" className="btn-primary">
                                    <span className="fa fa-plus"></span>Thêm Công Việc
                                </button>
                                <TaskControl />
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account;