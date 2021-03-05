// import style library
import './TaskList.scss'
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

// code function here
function TaskList(props) {
    // declare list Item
    var { task } = props;
    
    let listIndex = task.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                task={item}
                onSelectItem={props.onSelectItem}
                onUpdateStatus={props.onUpdateStatus}
                onDeleteTask={props.onDeleteTask}
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

export default connect(mapStateToStateTaskList,null)(TaskList);