// import style library, components
import './Account.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import {  useEffect } from 'react';
import TaskControl from './taskcontrol/TaskControl';
import TaskList from './tasklist/TaskList';
import TaskForm from './taskform/TaskForm';
import { connect } from 'react-redux';
import * as Actions from '../../../actions/Actions';

// function code here
function Account(props) {
    // declare state component
    // const [keyWord, setKeyWord] = useState('');
    // const [sortType, setSortType] = useState('0');
    var { isDisplayForm } = props;

    // close task form in first loading
    useEffect(
        () => {
            props.onCloseForm();
            // eslint-disable-next-line
        },[]
    )

    // toggle form add/edit
    var onToggleForm = () => {
        props.onSelectItemEdit(
            {
                id_account: '',
                user_name: '',
                password: '',
                position: '0',
                email: '',
                status: false
            }
        )
        let { itemEdit } = props;
        if (itemEdit&&itemEdit.id_account === ''){
            props.onToggleForm();
        }
    };

    // handle search
    var onSearch = text => {
        // setKeyWord(text);
    }

    // handle sort
    var onSort = type => {
        // setSortType(type);
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
                                    <TaskForm/>
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
                                <TaskList/>
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
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.accountEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(Actions.toggleForm());
        },
        onCloseForm: () => {
            dispatch(Actions.closeForm())
        },
       onSelectItemEdit: item => {
            dispatch(Actions.selectAccountEdit(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);