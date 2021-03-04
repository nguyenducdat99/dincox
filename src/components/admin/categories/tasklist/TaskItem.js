import TaskForm from "../taskform/TaskForm"

function TaskItem(props) {
    //  get props, declare variable, constant
    var { index, task, style } = props;
    const position = ['Khách hàng', 'Nhân viên', 'Chủ cửa hàng'];

    // handle return item for onSlectItem
    var onSelectItem = () => {
        props.onSelectItem(task);
    }
    
    // handle update status
    var onUpdateStatus = () => {
        props.onUpdateStatus(task);
    }

    // handle delete task
    var onDeleteTask = () => {
        props.onDeleteTask(task);
    }

    return (
        <tr className={style?style:""}>
            <td>{index}</td>
            <td>{task.id_account}</td>
            <td>{task.category_name}</td>
            <td>
                {
                    <span 
                        className={!(task.status) ? 'label label-danger' : 'label label-info' } 
                        onClick={onUpdateStatus}
                    >
                        { (task.status) ? 'Kích Hoạt' : 'Ẩn' } 
                    </span>
                }
            </td>
            <td>
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-pencil"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={onDeleteTask}>
                    <span className="fa fa-trash"></span>Xóa
                </button>
            </td>
        </tr>
    )
}

export default TaskItem;