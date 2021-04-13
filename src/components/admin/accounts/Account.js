// import style library, components
import './Account.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import {  useEffect } from 'react';


// function code here
function Account(props) {
    // declare state component
    // const [keyWord, setKeyWord] = useState('');
    // const [sortType, setSortType] = useState('0');
    const { 
        isDisplayForm,
        onCloseForm,
        onSelectItemEdit,
        itemEdit,
        onToggleFormRec,
        taskFormUI,
        taskListUI,
        taskControlUI
    } = props;

    // close task form in first loading
    useEffect(
        () => {
           onCloseForm();
            // eslint-disable-next-line
        },[]
    )

    // toggle form add/edit
    var onToggleForm = () => {
        onSelectItemEdit(
            {
                id_account: '',
                user_name: '',
                password: '',
                position: '0',
                email: '',
                status: 0
            }
        )

        if (itemEdit&&itemEdit.id_account === ''){
            onToggleFormRec();
        }
    };

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
                                    taskFormUI()
                                }
                            </div>
                            <div className="account__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Tài Khoản
                                </button>
                                {
                                    taskControlUI()
                                }
                                {
                                    taskListUI()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Account;