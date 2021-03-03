import TaskForm from "../taskform/TaskForm"

function TaskItem(props) {
    //  get props, declare variable, constant
    var { index, task, style } = props;
    const position = ['Khách hàng', 'Nhân viên', 'Chủ cửa hàng'];

    return (
        <tr className={style?style:""}>
            <td>{index}</td>
            <td>{task.user_name}</td>
            <td>{position[task.position-1]}</td>
            <td>{task.email}</td>
            <td>
                {
                    <span className={ !task.status ? 'label label-danger' : 'label label-info' }>
                        { task.status ? 'Kích Hoạt' : 'Ẩn' } 
                    </span>
                }
            </td>
            <td>
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" >
                    <span className="fa fa-trash"></span>Xóa
                </button>
            </td>
        </tr>
    )
}

export default TaskItem;