function TaskItem(props) {
    //  get props, declare variable, constant
    var { index, task } = props;
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
        <tr className={index%2===0?"task-list__table__line-odd":''}>
            <td>{index}</td>
            <td>{task.user_name}</td>
            <td>{position[(task.position*1)]}</td>
            <td>{task.email}</td>
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