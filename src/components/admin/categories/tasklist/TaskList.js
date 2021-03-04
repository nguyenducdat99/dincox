// import style library
import './TaskList.scss'
import TaskItem from './TaskItem';

// code function here
function TaskList(props) {
    // declare list Item
    var { task } = props;
    
    let listIndex = task.map((item, index) => {
        if (index%2===0) {
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
        }
        return (
                <TaskItem 
                    key={index}
                    index={index+1} 
                    task={item}
                    class={"task-list__table__line-odd"}
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
                        <th>Tác giả</th>
                        <th>Tên thể loại</th>
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