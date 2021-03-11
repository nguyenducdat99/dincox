// import style library
import './TaskList.scss'
import TaskItem from './TaskItem';
import { useEffect } from 'react';

// code function here
function TaskList(props) {
    // declare state 

    // load data
    useEffect( 
        () => {
            props.onFetchApi();
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

export default TaskList;