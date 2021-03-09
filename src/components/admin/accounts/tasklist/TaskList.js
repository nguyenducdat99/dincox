// import style library
import './TaskList.scss'
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as Actions from '../../../../actions/Actions';

// code function here
function TaskList(props) {
    // declare state 

    // load data
    useEffect( 
        () => {
            props.onFetchAccounts();
            // eslint-disable-next-line
        },[]
    )

    // declare list Item
    var { task } = props;

    let listIndex = task.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                task={item}
            />
        )
    });

    return (
        <div className="task-list">
            <table className="task-list__table"> 
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Người sử dụng</th>
                        <th>Email</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listIndex
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToStateTaskList = state => {
    return {
        task: state.ListAccount
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchAccounts : items => {
            dispatch(Actions.fetchAccountRequest());
        }
    }
}

export default connect(mapStateToStateTaskList,mapDispatchToProps)(TaskList);